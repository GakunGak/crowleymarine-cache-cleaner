/*
    Coded by Dragan GakunGak Jovanov
    https://github.com/GakunGak
*/

class StatsManager {
    static async isEnabled() {
        const result = await chrome.storage.local.get('extensionEnabled');
        return result.extensionEnabled !== false; // Default to true
    }

    static async setEnabled(enabled) {
        await chrome.storage.local.set({ extensionEnabled: enabled });
        // Notify content scripts about the change
        this.notifyTabs(enabled);
    }

    static async notifyTabs(isEnabled) {
        try {
            const tabs = await chrome.tabs.query({
                url: [
                    "*://*.crowleymarine.com/*",
                    "*://crowleymarine.com/*"
                ]
            });

            for (const tab of tabs) {
                chrome.tabs.sendMessage(tab.id, {
                    action: 'updateState',
                    enabled: isEnabled
                });
            }
        } catch (error) {
            console.error("Cache Cleaner: Failed to notify tabs", error);
        }
    }
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get('extensionEnabled', (result) => {
        if (result.extensionEnabled === undefined) {
            chrome.storage.local.set({ extensionEnabled: true });
        }
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const actions = {
        isEnabled: StatsManager.isEnabled,
        setEnabled: () => StatsManager.setEnabled(message.enabled),
    };
    
    const action = actions[message.action];
    if (action) {
        action().then(sendResponse).catch(error => {
            console.error('Cache Cleaner Background: Action error:', error);
            sendResponse({ success: false, error: error.message });
        });
        return true; // Indicates an async response
    }
});

console.log('Cache Cleaner Background: Service worker loaded');