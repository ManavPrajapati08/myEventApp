# 📝 Custom Fonts Setup Guide

## Step 1: Download Fonts

### Gothic A1
1. Go to: https://fonts.google.com/specimen/Gothic+A1
2. Click "Download family"
3. Extract the ZIP file
4. You need these files:
   - `GothicA1-Regular.ttf`
   - `GothicA1-Medium.ttf`
   - `GothicA1-SemiBold.ttf`
   - `GothicA1-Bold.ttf`

### Poppins
1. Go to: https://fonts.google.com/specimen/Poppins
2. Click "Download family"
3. Extract the ZIP file
4. You need these files:
   - `Poppins-Regular.ttf`
   - `Poppins-Medium.ttf`
   - `Poppins-SemiBold.ttf`
   - `Poppins-Bold.ttf`

## Step 2: Copy Font Files

Copy all the `.ttf` files to:
```
/home/manav/Desktop/Projects/myEventApp/assets/fonts/
```

Your folder structure should look like:
```
assets/
└── fonts/
    ├── GothicA1-Regular.ttf
    ├── GothicA1-Medium.ttf
    ├── GothicA1-SemiBold.ttf
    ├── GothicA1-Bold.ttf
    ├── Poppins-Regular.ttf
    ├── Poppins-Medium.ttf
    ├── Poppins-SemiBold.ttf
    └── Poppins-Bold.ttf
```

## Step 3: Link Fonts (React Native CLI)

Run this command in your terminal:
```bash
npx react-native-asset
```

## Step 4: Rebuild the App

**IMPORTANT:** You MUST rebuild the app after adding fonts!

```bash
# For Android
npx react-native run-android

# For iOS (if needed)
npx react-native run-ios
```

## ✅ What's Already Done

- ✅ Created `react-native.config.js` to configure font assets
- ✅ Created `src/constants/fonts.ts` with font definitions
- ✅ Updated `EventCard` to use Gothic A1 for all text
- ✅ Updated `Tag` component to use Poppins for tags

## 🎨 Font Usage

### Gothic A1 (Main text)
- **Title**: `fonts.gothicA1.bold`
- **Date**: `fonts.gothicA1.semiBold`
- **Location/Price**: `fonts.gothicA1.regular`

### Poppins (Tags)
- **Tags**: `fonts.poppins.semiBold`

## 🚨 Troubleshooting

If fonts don't show up:
1. Make sure all `.ttf` files are in `assets/fonts/`
2. Run `npx react-native-asset` again
3. **Completely rebuild** the app (not just reload)
4. Check font file names match exactly (case-sensitive!)
