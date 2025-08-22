/*
    Coded by Dragan GakunGak Jovanov
    https://github.com/GakunGak
*/

class PopupManager {
    constructor() {
        this.extensionToggle = document.getElementById('extensionToggle');
        this.toggleLabel = document.getElementById('toggleLabel');
        this.statusDot = document.getElementById('statusDot');
        this.statusText = document.getElementById('statusText');
        this.reloadSection = document.getElementById('reloadSection');
        this.reloadButton = document.getElementById('reloadButton');
        
        this.init();
    }

    async init() {
        await this.loadSettings();
        this.setupEventListeners();
    }

    async loadSettings() {
        try {
            const isEnabled = await this.sendMessage({ action: 'isEnabled' });
            this.extensionToggle.checked = isEnabled;
            this.updateToggleUI(isEnabled);
        } catch (error) {
            console.error('Cache Cleaner Popup: Failed to load settings:', error);
            this.extensionToggle.checked = true;
            this.updateToggleUI(true);
        }
    }

    updateToggleUI(isEnabled) {
        this.toggleLabel.textContent = isEnabled ? 'ON' : 'OFF';
        this.statusDot.className = `status-dot ${isEnabled ? 'active' : 'inactive'}`;
        this.statusText.textContent = isEnabled ? 'Active' : 'Inactive';
    }

    setupEventListeners() {
        this.extensionToggle.addEventListener('change', async (e) => {
            const isEnabled = e.target.checked;
            try {
                await this.sendMessage({ action: 'setEnabled', enabled: isEnabled });
                this.updateToggleUI(isEnabled);
                this.reloadSection.style.display = 'block';
            } catch (error) {
                console.error('Cache Cleaner Popup: Failed to update settings:', error);
                e.target.checked = !isEnabled;
            }
        });

        this.reloadButton.addEventListener('click', async () => {
            try {
                const tabs = await chrome.tabs.query({
                    url: [
                        "*://*.crowleymarine.com/*",
                        "*://crowleymarine.com/*"
                    ]
                });
                
                for (const tab of tabs) {
                    chrome.tabs.reload(tab.id);
                }
                
                window.close();
            } catch (error) {
                console.error('Cache Cleaner Popup: Failed to reload tabs:', error);
            }
        });
    }

    sendMessage(message, timeout = 5000) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject(new Error(`Message timeout: ${message.action}`));
            }, timeout);
            
            chrome.runtime.sendMessage(message, (response) => {
                clearTimeout(timeoutId);
                if (chrome.runtime.lastError) {
                    reject(new Error(chrome.runtime.lastError.message));
                } else {
                    resolve(response);
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new PopupManager());