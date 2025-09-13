
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
        // Update declarative net request rules based on enabled state
        await this.updateNetRequestRules(enabled);
        // Notify content scripts about the change
        this.notifyTabs(enabled);
    }

    static async updateNetRequestRules(enabled) {
        try {
            if (enabled) {
                // Enable the automatic cache clearing rule
                await chrome.declarativeNetRequest.updateEnabledRulesets({
                    enableRulesetIds: ["crowley_cache_rules"]
                });
            } else {
                // Disable the automatic cache clearing rule
                await chrome.declarativeNetRequest.updateEnabledRulesets({
                    disableRulesetIds: ["crowley_cache_rules"]
                });
            }
            console.log('Cache Cleaner: Declarative net request rules updated, enabled:', enabled);
        } catch (error) {
            console.error('Cache Cleaner: Failed to update declarative net request rules:', error);
        }
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

chrome.runtime.onInstalled.addListener(async () => {
    // Set default enabled state
    const result = await chrome.storage.local.get('extensionEnabled');
    if (result.extensionEnabled === undefined) {
        await chrome.storage.local.set({ extensionEnabled: true });
    }
    
    // Initialize declarative net request rules based on current state
    const isEnabled = result.extensionEnabled !== false;
    await StatsManager.updateNetRequestRules(isEnabled);
});

chrome.runtime.onStartup.addListener(async () => {
    // Ensure rules are properly set on browser startup
    const result = await chrome.storage.local.get('extensionEnabled');
    const isEnabled = result.extensionEnabled !== false;
    await StatsManager.updateNetRequestRules(isEnabled);
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

console.log('Cache Cleaner Background: Service worker loaded with automatic cache clearing');
