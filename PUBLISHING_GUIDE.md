# Publishing Guide for Cursor Atomizer Extension

This guide explains how to make the Atomizer extension available for Cursor users.

## 🎯 Distribution Options

### Option 1: GitHub Releases (Current - Immediate)
Users can download and install manually from GitHub releases.

### Option 2: Cursor Extension Marketplace (Recommended - Future)
Make the extension discoverable in Cursor's built-in marketplace.

### Option 3: Direct Link Distribution
Share a `.vsix` file link for quick installation.

---

## 📦 Option 1: Create GitHub Release with VSIX File

### Prerequisites
```bash
npm install -g @vscode/vsce
```

### Step-by-Step

**1. Package the extension:**
```bash
cd cursor-atomizer
vsce package
```

This creates a `.vsix` file (e.g., `atomizer-0.4.0.vsix`)

**2. Create a GitHub Release:**
- Go to: https://github.com/jitendravyas/cursor-atomizer/releases
- Click **"Create a new release"**
- Fill in:
  - **Tag:** `v0.4.0`
  - **Title:** `Atomizer v0.4.0 - Cursor Extension`
  - **Description:**
    ```
    ## Features
    - Automatic Atomic CSS generation
    - Support for Cursor and VSCode
    - Latest Atomizer 3.28.0
    
    ## Installation
    Download the `.vsix` file and install in Cursor via Extensions → Install from VSIX
    
    ## Release Notes
    - Updated to Atomizer 3.28.0
    - Improved error handling
    - Extended language support (TypeScript, Vue, Svelte)
    ```

**3. Attach the VSIX file:**
- Drag and drop `atomizer-0.4.0.vsix` into the release
- Click **"Publish release"**

**4. Users can now download and install:**
   - Download from: https://github.com/jitendravyas/cursor-atomizer/releases
   - Open Cursor
   - Extensions → Install from VSIX
   - Select the downloaded file

---

## 🏪 Option 2: Publish to Cursor Marketplace (Recommended)

### Prerequisites
1. Cursor account (if using marketplace)
2. VSCE CLI: `npm install -g @vscode/vsce`

### Step-by-Step

**1. Update package.json metadata:**
```json
{
    "name": "atomizer",
    "displayName": "Atomizer",
    "description": "Automatic Atomic CSS generation for Cursor and VSCode",
    "version": "0.4.0",
    "publisher": "jitendravyas",
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "https://github.com/jitendravyas/cursor-atomizer"
    },
    "homepage": "https://github.com/jitendravyas/cursor-atomizer",
    "bugs": {
        "url": "https://github.com/jitendravyas/cursor-atomizer/issues"
    }
}
```

**2. Create marketplace accounts:**
- For VSCode: https://marketplace.visualstudio.com/manage
- For Cursor: Follow Cursor's extension guidelines

**3. Authenticate with VSCE:**
```bash
vsce login jitendravyas
# Or for custom registry:
vsce login --registryUrl https://cursor-registry.com jitendravyas
```

**4. Publish the extension:**
```bash
vsce publish
```

Or publish with a specific version:
```bash
vsce publish 0.4.0
```

---

## 🚀 Option 3: Direct Link Distribution

Create a GitHub Actions workflow to automatically build and release.

**File: `.github/workflows/release.yml`**
```yaml
name: Release Extension

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Install VSCE
        run: npm install -g @vscode/vsce
      
      - name: Package extension
        run: vsce package
      
      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: '*.vsix'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 📋 Installation Instructions for Users

### From GitHub Release
1. Download `.vsix` file from [Releases](https://github.com/jitendravyas/cursor-atomizer/releases)
2. Open Cursor → Extensions (`Ctrl/Cmd + Shift + X`)
3. Click `...` menu → **Install from VSIX**
4. Select the file

### From Cursor Marketplace (After Publishing)
1. Open Cursor → Extensions (`Ctrl/Cmd + Shift + X`)
2. Search: **"Atomizer"**
3. Click **Install**

### From Command Line
```bash
# Install from GitHub release
code --install-extension path/to/atomizer-0.4.0.vsix

# Or for Cursor
cursor --install-extension path/to/atomizer-0.4.0.vsix
```

---

## 📊 Next Steps

### Immediate (This Week)
- ✅ Create GitHub Release with VSIX file
- ✅ Update README with installation instructions
- ✅ Share link with Cursor users

### Short Term (This Month)
- 📱 Submit to Cursor Marketplace
- 📱 Submit to VSCode Marketplace
- 📢 Announce on social media/forums

### Long Term (Ongoing)
- 🔄 Maintain and update extension
- 🐛 Fix reported issues
- ✨ Add new features based on feedback

---

## 🔗 Useful Links

- [VSCE Documentation](https://github.com/microsoft/vscode-vsce)
- [Cursor Extensions](https://cursor.sh/docs/extensions)
- [VSCode Marketplace Publishing](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

---

## ✅ Checklist Before Release

- [ ] Version updated in `package.json`
- [ ] README.md complete with usage instructions
- [ ] All features working and tested
- [ ] No console errors or warnings
- [ ] Dependencies up-to-date (Atomizer 3.28.0)
- [ ] License file included
- [ ] Repository URL in package.json correct
- [ ] Extension tested in Cursor
- [ ] Extension tested in VSCode

---

Need help? Create an issue: https://github.com/jitendravyas/cursor-atomizer/issues
