# Cursor Atomizer Extension

A powerful tool to automatically generate Atomic CSS in the Cursor editor.

## ✨ Features

- ⚡ **Automatic CSS Generation** - Generates Atomic CSS on file save
- 🎯 **Cursor Native** - Built for Cursor editor compatibility
- 🔄 **VSCode Compatible** - Also works in VSCode
- 📝 **Multi-Language Support** - HTML, JavaScript, TypeScript, Vue, Svelte, and more
- 🎨 **Customizable** - Full control over Atomic CSS configuration
- 🚀 **Zero Config** - Works out of the box with sensible defaults

## 📦 Installation

### From Cursor Extensions (Recommended)

1. Open **Cursor Editor**
2. Press `Ctrl/Cmd + Shift + X` to open Extensions
3. Search for **"Atomizer"**
4. Click **Install**
5. Restart Cursor

### Manual Installation

1. Download the `.vsix` file from [GitHub Releases](https://github.com/jitendravyas/cursor-atomizer/releases)
2. Open Cursor
3. Press `Ctrl/Cmd + Shift + X` (Extensions)
4. Click the `...` menu → **Install from VSIX**
5. Select the downloaded `.vsix` file

## 🚀 Quick Start

### 1. Create `atomizer.json` in your project root

```json
{
    "input"     : "./src/**/*.html",
    "output"    : "./dist/atomic.css",
    
    "config"    : {
        "breakPoints": {
            "sm": "@media(min-width=750px)",
            "md": "@media(min-width=1000px)",
            "lg": "@media(min-width=1200px)"
        },
        "custom": {
            "1": "1px solid #000",
            "foo": "2px dotted #f00"
        },
        "classNames": []
    }    
}
```

### 2. Restart Cursor

The extension automatically activates when it detects `atomizer.json`.

### 3. Start Coding

- Edit your HTML/component files
- Save the file (`Ctrl/Cmd + S`)
- Atomic CSS is automatically generated! ✅

## 📋 Configuration Guide

### Required Fields

- **`input`** (string): Glob pattern for files to scan
  - Example: `./src/**/*.html` or `./app/components/*.html`
  
- **`output`** (string): Path where generated CSS will be saved
  - Example: `./dist/atomic.css` or `./app/css/atomic.css`

### Config Object

- **`breakPoints`** (object): Custom media query definitions
  ```json
  {
    "sm": "@media(min-width=750px)",
    "md": "@media(min-width=1000px)",
    "lg": "@media(min-width=1200px)"
  }
  ```

- **`custom`** (object): Custom class definitions
  ```json
  {
    "1": "1px solid #000",
    "foo": "2px dotted #f00"
  }
  ```

- **`classNames`** (array): Pre-defined class names to include
  ```json
  ["className1", "className2"]
  ```

## 📁 Supported File Types

✅ **HTML/Templates:**
- `.html` - HTML files
- `.htm` - HTML files

✅ **JavaScript:**
- `.js` - JavaScript files
- `.jsx` - React/JSX files

✅ **TypeScript:**
- `.ts` - TypeScript files
- `.tsx` - TypeScript React files

✅ **Frameworks:**
- `.vue` - Vue components
- `.svelte` - Svelte components

## 🔍 How It Works

1. **Monitors File Saves** - Watches for file save events
2. **Reads Configuration** - Loads `atomizer.json` from project root
3. **Scans Source Files** - Analyzes files matching the input pattern
4. **Generates CSS** - Creates Atomic CSS based on detected classes
5. **Outputs Result** - Saves generated CSS to the output path

## ⚙️ System Requirements

- **Cursor** v0.1.0 or later
- **VSCode** v0.10.10 or later (if using in VSCode)
- **Node.js** (for running Atomizer)

## 🐛 Troubleshooting

### CSS not generating?

1. ✅ **Check `atomizer.json` exists** in project root
2. ✅ **Verify file paths** are correct (relative to project root)
3. ✅ **Check output directory** has write permissions
4. ✅ **Restart Cursor** after adding/modifying `atomizer.json`

### View Extension Logs

Press `Ctrl/Cmd + Shift + U` to open the Output panel and check for `[Atomizer]` messages.

### Common Issues

| Issue | Solution |
|-------|----------|
| "atomizer.json not found" | Create `atomizer.json` in project root |
| "CSS not updating" | Save a file that matches the input pattern |
| "Path errors" | Use forward slashes `/` in paths (even on Windows) |
| "No permissions" | Check write access to output directory |

## 📚 Example Projects

### Basic HTML Project
```json
{
    "input": "./src/*.html",
    "output": "./css/atomic.css",
    "config": {}
}
```

### React Project
```json
{
    "input": "./src/**/*.jsx",
    "output": "./dist/atomic.css",
    "config": {
        "breakPoints": {
            "sm": "@media(min-width=640px)",
            "md": "@media(min-width=1024px)"
        }
    }
}
```

### Vue/Svelte Project
```json
{
    "input": "./src/**/*.{vue,svelte}",
    "output": "./static/atomic.css",
    "config": {}
}
```

## 🔗 Resources

- [Atomizer Documentation](https://acss.io/)
- [GitHub Repository](https://github.com/jitendravyas/cursor-atomizer)
- [Original VSCode Extension](https://github.com/acss-io/vscode-atomizer)
- [Atomic CSS](https://acss.io/)

## 📝 License

MIT License - See [LICENSE.md](LICENSE.md) for details

## 🙏 Support

- ❓ Have questions? [Open an issue](https://github.com/jitendravyas/cursor-atomizer/issues)
- 🐛 Found a bug? [Report it](https://github.com/jitendravyas/cursor-atomizer/issues)
- ⭐ Like the extension? [Star the repo](https://github.com/jitendravyas/cursor-atomizer)

## 📊 Extension Details

- **Version:** 0.4.0
- **Atomizer Version:** 3.28.0 (latest)
- **Publisher:** jitendravyas
- **License:** MIT
- **Repository:** [GitHub](https://github.com/jitendravyas/cursor-atomizer)

---

Made with ❤️ for Cursor and VSCode developers
