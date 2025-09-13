
/*
    Coded by Dragan GakunGak Jovanov
    https://github.com/GakunGak
*/

const COLORS = {
    primary: '#1e3a5f', // Crowley Marine dark blue
    primaryHover: '#2c5282', // Lighter blue for hover
    accent: '#f56500', // Crowley Marine orange
    accentHover: '#e55100', // Darker orange for hover
    success: '#38a169',
    white: '#ffffff',
    shadow: 'rgba(30, 58, 95, 0.3)'
};

let floatingButton = null;

function isCrowleyMarinePage() {
    const hostname = window.location.hostname.toLowerCase();
    return hostname === 'crowleymarine.com' || hostname === 'www.crowleymarine.com';
}

function getUrlWithCacheParam(currentUrl) {
    const baseUrl = currentUrl.split('?')[0].split('#')[0];
    return `${baseUrl}?clearcache`;
}

function createFloatingButton() {
    if (floatingButton) return;

    floatingButton = document.createElement('button');
    floatingButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
            <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" fill="currentColor"/>
            <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" fill="currentColor"/>
        </svg>
        Clear Cache
    `;
    floatingButton.className = 'crowley-cache-cleaner-button';
    floatingButton.setAttribute('aria-label', 'Clear page cache');
    floatingButton.setAttribute('title', 'Clear Cache - Reload page with fresh content (Manual override)');
    
    // Set all CSS properties directly with !important to override any website styles
    const buttonStyles = {
        // CRITICAL: Position in TOP-RIGHT corner of viewport
        'position': 'fixed',
        'top': '20px',
        'right': '20px',
        'bottom': 'auto',
        'left': 'auto',
        
        // Ensure maximum z-index
        'z-index': '2147483647',
        
        // Appearance
        'background-color': COLORS.primary,
        'color': COLORS.white,
        'border': `2px solid ${COLORS.accent}`,
        'border-radius': '12px',
        'padding': '12px 20px',
        'font-size': '14px',
        'font-weight': '600',
        'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        'cursor': 'pointer',
        'box-shadow': `0 8px 25px ${COLORS.shadow}, 0 4px 10px rgba(0, 0, 0, 0.1)`,
        'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Layout
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'min-width': '140px',
        'max-width': '200px',
        'height': 'auto',
        
        // Visual effects
        'backdrop-filter': 'blur(10px)',
        '-webkit-backdrop-filter': 'blur(10px)',
        
        // Reset any potential conflicts
        'margin': '0',
        'float': 'none',
        'clear': 'none',
        'transform': 'none',
        'transform-origin': 'center center',
        'visibility': 'visible',
        'opacity': '1',
        'overflow': 'visible',
        'user-select': 'none',
        'outline': 'none',
        'text-decoration': 'none',
        'line-height': '1.2',
        'white-space': 'nowrap'
    };

    // Apply all styles with !important
    Object.keys(buttonStyles).forEach(property => {
        floatingButton.style.setProperty(property, buttonStyles[property], 'important');
    });

    // Hover effects
    floatingButton.addEventListener('mouseenter', () => {
        floatingButton.style.setProperty('background-color', COLORS.primaryHover, 'important');
        floatingButton.style.setProperty('border-color', COLORS.accentHover, 'important');
        floatingButton.style.setProperty('transform', 'translateY(-2px) scale(1.02)', 'important');
        floatingButton.style.setProperty('box-shadow', `0 12px 35px ${COLORS.shadow}, 0 6px 15px rgba(0, 0, 0, 0.15)`, 'important');
    });

    floatingButton.addEventListener('mouseleave', () => {
        floatingButton.style.setProperty('background-color', COLORS.primary, 'important');
        floatingButton.style.setProperty('border-color', COLORS.accent, 'important');
        floatingButton.style.setProperty('transform', 'translateY(0) scale(1)', 'important');
        floatingButton.style.setProperty('box-shadow', `0 8px 25px ${COLORS.shadow}, 0 4px 10px rgba(0, 0, 0, 0.1)`, 'important');
    });

    floatingButton.addEventListener('mousedown', () => {
        floatingButton.style.setProperty('transform', 'translateY(0) scale(0.98)', 'important');
    });

    floatingButton.addEventListener('mouseup', () => {
        floatingButton.style.setProperty('transform', 'translateY(-2px) scale(1.02)', 'important');
    });

    // Focus styles for accessibility
    floatingButton.addEventListener('focus', () => {
        floatingButton.style.setProperty('outline', `3px solid ${COLORS.accent}`, 'important');
        floatingButton.style.setProperty('outline-offset', '2px', 'important');
    });

    floatingButton.addEventListener('blur', () => {
        floatingButton.style.setProperty('outline', 'none', 'important');
    });

    floatingButton.addEventListener('click', clearPageCache);
    
    // Insert at the very end of body to ensure it's on top
    document.body.appendChild(floatingButton);
    
    // Force a reflow to ensure positioning is applied
    floatingButton.offsetHeight;
    
    console.log('Crowley Cache Cleaner: Manual floating button created at TOP-RIGHT position');
}

function removeFloatingButton() {
    if (floatingButton) {
        // Animate out
        floatingButton.style.setProperty('opacity', '0', 'important');
        floatingButton.style.setProperty('transform', 'translateY(-20px) scale(0.8)', 'important');
        
        setTimeout(() => {
            if (floatingButton && floatingButton.parentNode) {
                floatingButton.remove();
                floatingButton = null;
                console.log('Crowley Cache Cleaner: Floating button removed');
            }
        }, 300);
    }
}

function clearPageCache() {
    showNotification('Manually clearing cache...', 'primary');
    
    // Add a small delay to show the notification before redirect
    setTimeout(() => {
        window.location.href = getUrlWithCacheParam(window.location.href);
    }, 500);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px; flex-shrink: 0;">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
        <span>${message}</span>
    `;
    notification.className = 'crowley-cache-notification';
    
    const notificationStyles = {
        'position': 'fixed',
        'top': '80px', // Below the button
        'right': '20px',
        'z-index': '2147483646', // Just below the button
        'background-color': type === 'success' ? COLORS.success : COLORS.primary,
        'color': COLORS.white,
        'padding': '16px 20px',
        'border-radius': '12px',
        'box-shadow': `0 8px 25px ${COLORS.shadow}, 0 4px 10px rgba(0, 0, 0, 0.1)`,
        'font-size': '14px',
        'font-weight': '500',
        'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        'display': 'flex',
        'align-items': 'center',
        'max-width': '300px',
        'backdrop-filter': 'blur(10px)',
        '-webkit-backdrop-filter': 'blur(10px)',
        'border': `2px solid ${COLORS.accent}`,
        'opacity': '0',
        'transform': 'translateX(100px) scale(0.8)',
        'transition': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'user-select': 'none',
        'pointer-events': 'none'
    };

    // Apply all styles with !important
    Object.keys(notificationStyles).forEach(property => {
        notification.style.setProperty(property, notificationStyles[property], 'important');
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.setProperty('opacity', '1', 'important');
        notification.style.setProperty('transform', 'translateX(0) scale(1)', 'important');
    }, 100);

    // Animate out
    setTimeout(() => {
        notification.style.setProperty('opacity', '0', 'important');
        notification.style.setProperty('transform', 'translateX(100px) scale(0.8)', 'important');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, 3000);
}

async function init() {
    if (!isCrowleyMarinePage()) return;

    try {
        const isEnabled = await chrome.runtime.sendMessage({ action: 'isEnabled' });
        if (isEnabled) {
            // Wait for DOM to be fully ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', createFloatingButton);
            } else {
                createFloatingButton();
            }
            
            // Show success notification if page was automatically cleared
            if (window.location.href.includes('clearcache')) {
                setTimeout(() => {
                    showNotification('Cache automatically cleared on page load!', 'success');
                }, 1000);
            }
        }
    } catch (error) {
        console.error('Crowley Cache Cleaner: Failed to check extension status.', error);
    }
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'updateState') {
        if (message.enabled) {
            createFloatingButton();
        } else {
            removeFloatingButton();
        }
    }
});

// Ensure the script runs when the page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Also run on window load as a fallback
window.addEventListener('load', () => {
    if (!floatingButton) {
        init();
    }
});
