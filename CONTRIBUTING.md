
# Contributing to Crowley Marine Cache Cleaner

Thank you for your interest in contributing to the Crowley Marine Cache Cleaner Chrome extension! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Chrome browser (version 88 or higher)
- Basic knowledge of JavaScript, HTML, and CSS
- Familiarity with Chrome Extension APIs
- Git for version control

### Development Setup
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/crowley-marine-cache-cleaner.git
   cd crowley-marine-cache-cleaner
   ```
3. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project directory

## 📋 Development Guidelines

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Maintain the dark theme aesthetic

### File Organization
- `manifest.json`: Extension configuration
- `background.js`: Service worker logic
- `content.js`: Page interaction scripts
- `popup.js/html/css`: Dashboard interface
- `icons/`: Extension icons in multiple sizes

### Testing
Before submitting changes:
1. Test the extension on multiple Crowley Marine URLs
2. Verify statistics tracking works correctly
3. Check popup interface responsiveness
4. Ensure no console errors
5. Test with different Chrome versions if possible

## 🐛 Reporting Issues

### Bug Reports
When reporting bugs, please include:
- Chrome version and OS
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Console error messages (if any)

### Feature Requests
For new features:
- Describe the feature clearly
- Explain the use case and benefits
- Consider implementation complexity
- Check if similar features exist

## 🔧 Making Changes

### Branch Naming
- `feature/description` for new features
- `bugfix/description` for bug fixes
- `docs/description` for documentation updates
- `refactor/description` for code improvements

### Commit Messages
Use clear, descriptive commit messages:
```
Add statistics export functionality

- Implement CSV export for usage data
- Add export button to dashboard
- Include date range selection
```

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes with appropriate tests
3. Update documentation if needed
4. Ensure all tests pass
5. Submit a pull request with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing instructions

## 🎨 UI/UX Guidelines

### Dark Theme Consistency
- Use the established color palette
- Maintain contrast ratios for accessibility
- Follow existing spacing and typography
- Test in both light and dark system themes

### Dashboard Design
- Keep the interface clean and minimal
- Use consistent iconography
- Ensure responsive design
- Maintain fast loading times

## 🔒 Security Considerations

### Extension Security
- Minimize permissions requested
- Validate all user inputs
- Use secure coding practices
- Avoid eval() and similar functions
- Keep dependencies minimal

### Privacy Protection
- No external data transmission
- Local storage only
- Clear data handling policies
- Respect user privacy preferences

## 📚 Resources

### Chrome Extension Documentation
- [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Extension APIs](https://developer.chrome.com/docs/extensions/reference/)

### Development Tools
- Chrome DevTools for debugging
- Extension Reloader for development
- Lighthouse for performance testing

## 🤝 Community

### Communication
- Use GitHub Issues for bug reports and feature requests
- Be respectful and constructive in discussions
- Help other contributors when possible
- Follow the code of conduct

### Recognition
Contributors will be acknowledged in:
- README.md acknowledgments section
- Release notes for significant contributions
- GitHub contributor statistics

## 📝 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## ❓ Questions?

If you have questions about contributing:
- Check existing issues and documentation
- Create a new issue with the "question" label
- Be specific about what you need help with

Thank you for contributing to make this extension better for everyone! 🎉
