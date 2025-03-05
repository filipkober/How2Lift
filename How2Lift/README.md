# How2Lift - Frontend Documentation

## Overview

How2Lift is a mobile application that helps users identify gym equipment and learn proper exercise techniques. The application uses camera recognition to scan gym equipment and provide detailed information.

## Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation with Expo Router
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Icons**: Expo Vector Icons
- **Camera**: Expo Camera

## Project Structure

- `app/` - Contains all screens and navigation setup
  - `(tabs)/` - Tab-based screens (Exercises, Muscles, Scan, Search, Settings)
  - `_layout.tsx` - Root navigation configuration
- `components/` - Reusable UI components
- `assets/` - Images, fonts, and other static files
- `styles/` - Global styles

## Key Features

1. **Equipment Scanning**: Use the camera to identify gym machines
2. **Exercise Library**: Browse exercises by category
3. **Muscle-based Navigation**: Find exercises by muscle groups
4. **Search Functionality**: Look up machines and exercises

## Installation & Setup

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)

### Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   npx expo start
   ```

4. Use the Expo Go app to run on a physical device, or press 'a' for Android emulator or 'i' for iOS simulator

### Project Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start on Android emulator
- `npm run ios` - Start on iOS simulator
- `npm run web` - Start web version
- `npm run reset-project` - Reset the project to a clean state
- `npm test` - Run tests
- `npm run lint` - Run linting

## Folder Structure

```txt
How2Lift/
├── app/                    # Application screens and navigation
│   ├── (tabs)/             # Tab-based screens
│   │   ├── exercises.tsx   # Exercise library screen
│   │   ├── muscles.tsx     # Muscle groups screen
│   │   ├── scan.tsx        # Camera scanning screen
│   │   ├── search.tsx      # Search functionality
│   │   └── settings.tsx    # App settings
│   └── _layout.tsx         # Root navigation layout
├── assets/                 # Static assets
│   ├── images/             # Image files
│   └── fonts/              # Custom fonts
├── components/             # Reusable UI components
│   ├── common/             # Common UI elements
│   ├── exercise/           # Exercise-related components
│   └── muscle/             # Muscle-related components
├── styles/                 # Global styles
├── utils/                  # Utility functions
├── hooks/                  # Custom React hooks
├── services/               # API and other services
├── types/                  # TypeScript type definitions
├── constants/              # App constants
└── app.json                # Expo configuration
```

## Camera & Recognition Features

The scanning feature uses the device camera to recognize gym equipment:

1. The app accesses the camera using Expo Camera
2. When a piece of equipment is recognized, relevant information is displayed
3. Users can save equipment to their favorites for quick access

## State Management

- Local component state for UI components
- React Context for global state management
- AsyncStorage for persistent data

## API Integration

The app connects to a backend API for:

- Exercise data
- Equipment recognition

## Testing

- Unit tests with Jest
- Component tests with React Testing Library
- End-to-end testing with Detox

## Build & Deployment

### Building for Production

```bash
expo build:android  # For Android
expo build:ios      # For iOS
```

### Publishing Updates

```bash
expo publish
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
