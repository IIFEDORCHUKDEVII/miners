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
    └──📁assets
    └──📁components/                # UI-компоненти
        └── CatchGoldItem/
        └── CatchSlot/
        └── HeaderScreen/
    └──📁core/                      # Базові повторно використовувані компоненти
       └── ButtonBottom/
    └──📁 screens/                   # Основні екрани
        └── CatchGoldScreen/
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
