# 🎰 Catch Gold Game – React Native App

A mobile game built with **React Native** where players spin a slot-style interface to catch gold and win rewards. The app includes animated slots, custom components, and dynamic UI based on game logic.

## 📱 Features

- 🎮 Slot-based spinning game
- ✨ Smooth animations using `react-native-reanimated`
- 🧩 Modular components (`CatchSlot`, `CatchGoldItem`, `ButtonBottom`, etc.)
- 🎨 Custom design with background images and themed fonts
- 🎲 Randomized logic for dynamic gameplay
- 💰 Win counter based on the number of selected slots

## 🧰 Tech Stack

- **React Native**
- **TypeScript**
- **React Native Reanimated**
- **Custom Hooks** for game logic
- **Modular architecture** with reusable UI components

## 📁 Folder Structure
```
└── 📁src
    └── 📁assets
        └── 📁audio
            └── background.mp3
            └── slot.mp3
        └── 📁fonts
            └── Angkor-Regular.ttf
            └── BlackOpsOne-Regular.ttf
            └── Montserrat-Black.ttf
            └── Montserrat-BlackItalic.ttf
            └── Montserrat-Bold.ttf
            └── Montserrat-BoldItalic.ttf
            └── Montserrat-ExtraBold.ttf
            └── Montserrat-ExtraBoldItalic.ttf
            └── Montserrat-ExtraLight.ttf
            └── Montserrat-ExtraLightItalic.ttf
            └── Montserrat-Italic.ttf
            └── Montserrat-Light.ttf
            └── Montserrat-LightItalic.ttf
            └── Montserrat-Medium.ttf
            └── Montserrat-MediumItalic.ttf
            └── Montserrat-Regular.ttf
            └── Montserrat-SemiBold.ttf
            └── Montserrat-SemiBoldItalic.ttf
            └── Montserrat-Thin.ttf
            └── Montserrat-ThinItalic.ttf
            └── SuezOne-Regular.ttf
        └── 📁icons
            └── BackIcon.tsx
            └── LogoIcon.tsx
            └── MenuIcon.tsx
        └── 📁images
            └── back.png
            └── beta.png
            └── bg_blur.png
            └── bg.png
            └── bottomBtn.png
            └── btn.png
            └── catch_active.png
            └── catch.png
            └── catchGoldBg.png
            └── chest.png
            └── coins.png
            └── games.png
            └── life.png
            └── man.png
            └── menu.png
            └── mine_active.png
            └── mine.png
            └── mineQuestBg.png
            └── minus.png
            └── plus.png
            └── privacy.png
            └── settingBtn.png
            └── settings.png
            └── 📁slots
                └── barge.png
                └── dead.png
                └── diger.png
                └── piramida.png
                └── train_2.png
                └── train.png
                └── wagon_2.png
                └── wagon.png
            └── spin_active.png
            └── spin.png
            └── spinBg.png
            └── splash.png
            └── statusBG.png
            └── wasted.png
    └── 📁components
        └── 📁BetaController
            └── BetaController.tsx
        └── 📁Card
            └── Card.tsx
        └── 📁CatchGoldItem
            └── CatchGoldItem.tsx
        └── 📁CatchSlot
            └── CatchSlot.tsx
        └── 📁HeaderScreen
            └── HeaderScreen.tsx
            └── useData.ts
        └── 📁SettingController
            └── SettingController.tsx
        └── 📁Slot
            └── Slot.tsx
        └── 📁StatusSpin
            └── StatusSpin.tsx
        └── 📁Timer
            └── Timer.tsx
            └── useData.ts
    └── 📁core
        └── 📁ButtonBottom
            └── ButtonBottom.tsx
        └── 📁ButtonImageBG
            └── ButtonImageBG.tsx
        └── 📁SvgButtonAccept
            └── SvgButtonAccept.tsx
        └── 📁SvgButtonStart
            └── SvgButtonStart.tsx
    └── 📁hooks
        └── useTimer.ts
    └── 📁navigation
        └── GamesNavigation.tsx
        └── GamesNavigation.types.ts
        └── MenuNavigation.tsx
        └── MenuNavigation.types.ts
        └── RootNavigation.tsx
        └── RootNavigation.types.ts
    └── 📁screens
        └── 📁CatchGoldScreen
            └── CatchGoldScreen.tsx
            └── useData.ts
        └── 📁GamesScreen
            └── GamesScreen.tsx
            └── useData.ts
        └── 📁MenuScreen
            └── MenuScreen.tsx
            └── useData.ts
        └── 📁MineQuestScreen
            └── MineQuestScreen.tsx
            └── useData.ts
        └── 📁PrivacyScreen
            └── PrivacyScreen.tsx
            └── useData.ts
        └── 📁SettingsScreen
            └── SettingsScreen.tsx
        └── 📁SpinTreasureScreen
            └── SpinTreasureScreen.tsx
            └── useData.ts
        └── 📁SplashScreen
            └── SplashScreen.tsx
        └── 📁StartScreen
            └── StartScreen.tsx
        └── 📁wrappers
            └── 📁ScreenWrapper
                └── ScreenWrapper.tsx
    └── 📁store
        └── 📁api
            └── banerApi.ts
        └── 📁features
            └── setting.ts
            └── slot.ts
        └── hooks.ts
        └── store.ts
    └── 📁theme
        └── colors.ts
    └── 📁utils
        └── findCommonElements.ts
        └── getRandomEveryNth.ts
        └── shuffle.ts
        └── swap.ts
```
## 🚀 Getting Started

### Prerequisites

- Node.js >= 16.x
- Yarn or npm
- Expo CLI or React Native CLI
- iOS/Android Emulator or physical device

### Installation

```bash
git clone https://github.com/your-username/catch-gold-game.git
cd catch-gold-game
yarn install
```
### 2. Install dependencies

```bash
npm install
#or
yarn install
```
### 3. Run on device/emulator

```bash
npx react-native run-android
#or
npx react-native run-ios
```
---

## 🧪 Development Tips

- Modify slot behavior via useData.ts and CatchSlot props.
- Style components centrally using StyleSheet in each file.
- Tune animation settings in withTiming() and Easing for visual polish.

## 👤 Author
Artur Fedorchuk | React Native Developer
