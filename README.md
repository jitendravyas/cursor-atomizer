## Atomizer - Cursor & VSCode Extension

A tool to automatically generate Atomic CSS in both **Cursor** and **VSCode** editors.

### Features

- ⚡ Automatic CSS generation on file save
- 🎯 Works with Cursor and VSCode
- 🔧 Supports multiple file types (HTML, JavaScript, TypeScript, Vue, Svelte, and more)
- 📝 Simple JSON configuration
- 🚀 Built on the powerful Atomizer library

### Installation

1. Install the extension from the Cursor/VSCode marketplace or from GitHub
2. Restart your editor after installation

![Installation GIF](http://res.cloudinary.com/dw9fem4ki/image/upload/c_mfit,q_100,w_1000/v1459669769/installation_iscrel.gif)

### Activation

The extension activates automatically when it finds the `atomizer.json` file in the root of your project directory.

#### Configuration Example

Create an `atomizer.json` file in your project root:

```json
{
    "input"     : "./app/components/*.html",
    "output"    : "./app/css/atomic.css",
    
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

### Supported File Types

The extension provides Atomic CSS snippets and auto-generation for:

- `.html` - HTML files
- `.htm` - HTML files
- `.js` - JavaScript files
- `.jsx` - React/JSX files
- `.ts` - TypeScript files
- `.tsx` - TypeScript React files
- `.vue` - Vue components
- `.svelte` - Svelte components

> **Note:** Please restart your editor and reopen the project folder after adding `atomizer.json` for the changes to take effect.

### Usage

![Usage GIF](http://res.cloudinary.com/dw9fem4ki/image/upload/v1459669466/usage_mtx65l.gif)

1. Create an `atomizer.json` configuration file in your project root
2. Start editing your HTML/component files
3. Save a file to automatically generate Atomic CSS
4. The output CSS file will be created/updated based on your configuration

### Configuration Options

- **input**: Glob pattern for source files to analyze
- **output**: Path where the generated CSS file will be saved
- **config**: Atomizer configuration object with:
  - `breakPoints`: Custom media queries
  - `custom`: Custom class definitions
  - `classNames`: Array of class names to include

### Troubleshooting

- **CSS not generating?** Make sure `atomizer.json` exists in your project root
- **Check the extension logs** in the Output panel (Ctrl/Cmd + Shift + U) for debugging
- **Ensure the paths in atomizer.json are correct** and relative to your project root
- **File permissions** - Make sure your process has write access to the output directory

### Requirements

- Cursor Editor (v0.1.0 or later) or VSCode (v0.10.10 or later)
- Node.js (for the Atomizer library)

### License

MIT

### Related Links

- [Atomizer Documentation](https://acss.io/)
- [Original VSCode Extension](https://github.com/acss-io/vscode-atomizer)
