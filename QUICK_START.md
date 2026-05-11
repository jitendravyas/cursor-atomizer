# Cursor Atomizer - Quick Start Release Guide

## 🚀 Make Your Extension Available in 2 Commands

### Command 1: Create Release
```bash
chmod +x release.sh
./release.sh 0.4.0
```

This script:
- ✅ Updates version in package.json
- ✅ Creates a git commit
- ✅ Creates a git tag `v0.4.0`
- ✅ Shows next steps

### Command 2: Push to GitHub
```bash
git push origin master
git push origin --tags
```

---

## ✨ What Happens Next

GitHub Actions **automatically**:

1. ✅ Detects the new tag `v0.4.0`
2. ✅ Installs dependencies
3. ✅ Packages the extension (creates `.vsix` file)
4. ✅ Creates a GitHub Release
5. ✅ Uploads the `.vsix` file with download link
6. ✅ Adds installation instructions

---

## 📥 Cursor Users Can Now Install

**From GitHub Releases:**
1. Go to: https://github.com/jitendravyas/cursor-atomizer/releases
2. Download the latest `.vsix` file
3. Open Cursor → Extensions (`Ctrl/Cmd + Shift + X`)
4. Click `...` menu → **Install from VSIX**
5. Select the file
6. Restart Cursor ✅

---

## 📋 What Gets Released

Each release includes:
- 📦 `atomizer-0.4.0.vsix` - Packaged extension
- 📝 Release notes with installation instructions
- 🔗 Download link
- 📚 Link to documentation

---

## 🎯 Complete Workflow

```
1. Make code changes → git commit
2. Run: ./release.sh 0.4.0
3. Run: git push origin master --tags
4. 🤖 GitHub Actions runs automatically
5. 📦 Extension packaged and released
6. ✅ Available for download
7. 👥 Users can install from Cursor
```

---

## 💡 Tips & Examples

### Create first release (v0.4.0)
```bash
./release.sh 0.4.0
git push origin master --tags
```

### Create next release (v0.5.0)
```bash
./release.sh 0.5.0
git push origin master --tags
```

### View all releases
https://github.com/jitendravyas/cursor-atomizer/releases

### View GitHub Actions status
https://github.com/jitendravyas/cursor-atomizer/actions

---

## 🔧 Manual Alternative

If you prefer to do it manually:

```bash
# Install packaging tool
npm install -g @vscode/vsce

# Package extension
vsce package

# Create GitHub Release manually
# Upload atomizer-0.4.0.vsix file
```

---

## ❓ FAQ

**Q: How often should I release?**
A: Release when you have new features or bug fixes

**Q: Can I change the version?**
A: Yes, use any semantic version: `./release.sh 1.0.0`

**Q: What if I make a mistake?**
A: Delete the tag: `git tag -d v0.4.0` and retry

**Q: How do users get updates?**
A: They download the latest version from releases

---

## ✅ You're All Set!

Your extension is now ready to be released to Cursor users!

**Next Step:** Run `./release.sh 0.4.0` when you're ready 🚀
