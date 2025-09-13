# Crowley Marine Cache Cleaner

Coded by Dragan GakunGak Jovanov 

A Chrome extension that automatically adds cache clearing parameters to Crowley Marine websites and provides a manual floating "Clear Cache" button. This helps users, developers and content managers quickly view the latest changes without dealing with cached versions of the site.

<img width="1395" height="748" alt="image" src="https://github.com/user-attachments/assets/348b9290-5a83-4d77-b22b-c2e82c4c4269" />


## Features

- **Automatic Cache Clearing**: Every crowleymarine.com page visit automatically gets `/?clearcache` parameter added before page loads
- **Manual Override Button**: A floating "Clear Cache" button is still available for manual cache clearing
- **Simple On/Off Toggle**: Easily enable or disable both automatic and manual functionality from the popup
- **Smart URL Handling**: Only applies to main crowleymarine.com domain and subpages (not subdomains)
- **Real-time Updates**: The floating button appears or disappears instantly as you toggle the extension on or off
- **Reload Prompt**: The popup prompts you to reload all Crowley Marine tabs after enabling or disabling the extension

## How It Works

### Automatic Cache Clearing
When enabled, the extension automatically intercepts navigation to any `crowleymarine.com` or `www.crowleymarine.com` URL and adds the `/?clearcache` parameter before the page loads. This ensures every page visit gets fresh content without any manual intervention.

### Manual Override
The familiar floating "Clear Cache" button remains available as a manual override option, appearing in the top-right corner of Crowley Marine pages when the extension is active.

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
    *   Go to any page on `crowleymarine.com` or `www.crowleymarine.com`.
    *   The page will automatically load with cache clearing enabled.

3.  **Manual Override (Optional)**:
    *   You'll also see a "Clear Cache" button floating in the upper-right corner of the page.
    *   Click this button for manual cache clearing if needed.

4.  **Disabling the Extension**:
    *   Open the popup and set the toggle switch to "OFF".
    *   Both automatic cache clearing and the floating button will be disabled.

## Changelog

### Version 3.2.0 - September 13, 2025 (Current)
- **NEW**: **Automatic Cache Clearing** - Every crowleymarine.com page visit now automatically gets `/?clearcache` parameter added before page loads
- **Enhanced**: Manual floating button remains available as fallback/override option
- **Improved**: Uses Chrome's declarativeNetRequest API for efficient URL interception
- **Updated**: Status indicator now shows "Auto + Manual Active" when enabled
- **Technical**: Added rules.json for declarative net request configuration
- **Smart**: Only applies to main crowleymarine.com domain and subpages (excludes subdomains)

### Version 3.1.0
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

## Technical Details

### URL Transformation
- **Input**: `https://crowleymarine.com/path` or `https://crowleymarine.com/path/`
- **Output**: `https://crowleymarine.com/path/?clearcache`
- **Display**: After page loads, URL shows as `https://crowleymarine.com/path?clearcache`

### Domain Scope
- ✅ `crowleymarine.com`
- ✅ `www.crowleymarine.com`
- ❌ `subdomain.crowleymarine.com` (excluded)

### Browser Compatibility
- Chrome 88+
- Other Chromium-based browsers (Edge, Brave, etc.)
- Manifest V3 compliant

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
