# Crowley Marine Cache Cleaner

Coded by Dragan GakunGak Jovanov - 

A simple Chrome extension that adds a floating "Clear Cache" button to Crowley Marine websites. This helps developers and content managers quickly view the latest changes without dealing with cached versions of the site.

## Features

- **Simple On/Off Toggle**: Easily enable or disable the extension from the popup.
- **Floating "Clear Cache" Button**: A convenient button is added to all Crowley Marine pages when the extension is active.
- **One-Click Cache Clearing**: Clicking the button reloads the page with a `/?clearcache` parameter, forcing the server to send the latest version of the page.
- **Real-time Updates**: The floating button appears or disappears instantly as you toggle the extension on or off, without needing a manual refresh.
- **Reload Prompt**: The popup prompts you to reload all Crowley Marine tabs after enabling or disabling the extension to ensure the changes take effect everywhere.

## Installation

### From the Chrome Web Store (Recommended)

*Coming soon...*

### Manual Installation (for Developers)

1.  **Download the Extension**:
    *   Clone this repository or download the source code as a ZIP file and unzip it.

2.  **Open Chrome Extensions**:
    *   Open your Chromium-based browser (Google Chrome, Brave, etc.).
    *   Navigate to `chrome://extensions`.

3.  **Enable Developer Mode**:
    *   In the top-right corner of the Extensions page, turn on the "Developer mode" toggle.

4.  **Load the Extension**:
    *   Click the "Load unpacked" button that appears.
    *   In the file dialog, select the `crowley-cache-cleaner` directory (the one containing `manifest.json`).

5.  **Done!**:
    *   The Crowley Marine Cache Cleaner extension should now appear in your list of extensions and be active. You can pin it to your toolbar for easy access.

## How to Use

1.  **Enable the Extension**:
    *   Click the extension icon in your browser's toolbar to open the popup.
    *   Make sure the toggle switch is set to "ON".

2.  **Navigate to a Crowley Marine Page**:
    *   Go to any page on `www.crowleymarine.com`.

3.  **Use the Floating Button**:
    *   You should see a "Clear Cache" button floating in the upper-right corner of the page.
    *   Click this button to reload the page and clear its cache.

4.  **Disabling the Extension**:
    *   Open the popup and set the toggle switch to "OFF".
    *   The floating button will be removed from all Crowley Marine pages instantly.

## Changelog

### Version 3.1.0 (Current)
- **Fixed**: Floating button now appears and disappears reliably.
- **Real-time Updates**: The floating button's visibility is now updated instantly across all open Crowley Marine tabs when the extension is toggled.
- **Improved Reload**: The reload button in the popup now reloads all open Crowley Marine tabs at once.

### Version 3.0.0
- **Complete Overhaul**: Simplified the extension to focus on core functionality.
- **Removed Dashboard**: The popup no longer shows statistics or page detection info.
- **Simplified Popup**: The popup now only contains an ON/OFF switch, a status indicator, and a reload prompt.
- **Floating Button Control**: The ON/OFF switch now directly controls whether the floating "Clear Cache" button appears on Crowley Marine pages.
- **Removed Statistics**: All statistics tracking has been removed to streamline the extension.
- **Code Refactor**: Rewrote the background script, content script, and popup script to be simpler and more efficient.

### Version 2.0.0
- Added a dashboard with statistics (total pages cleared, session count).
- Implemented page detection to show whether the current page was a Crowley Marine page.
- Added a "Clear Cache for This Page" button in the popup.
- Introduced a floating "Clear Cache" button on Crowley Marine pages.

### Version 1.0.0
- Initial release.
- Automatically appended `/?clearcache` to all Crowley Marine URLs.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or find any bugs, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
