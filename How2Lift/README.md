# How2Lift - Frontend Documentation

## Overview

How2Lift is a mobile application that helps users identify gym equipment and learn proper exercise techniques. The application uses camera recognition to scan gym equipment and provide detailed information, exercise tutorials, and tracking capabilities.

## Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation with Expo Router
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Icons**: Expo Vector Icons
- **Camera**: Expo Camera
- **Video**: Expo AV for exercise tutorials
- **Storage**: AsyncStorage for local data persistence
- **Fonts**: Custom fonts including Quicksand

## Project Structure

- `app/` - Contains all screens and navigation setup
  - `(tabs)/` - Tab-based screens (Exercises, Muscles, Scan, Search, Settings)
  - `_layout.tsx` - Root navigation configuration
- `components/` - Reusable UI components
- `assets/` - Images, fonts, and other static files
- `styles/` - Global styles
- `services/` - API client services and data management
- `types/` - TypeScript type definitions
- `mocks/` - Mock data for development

## Key Features

1. **Equipment Scanning**: Use the camera to identify gym machines
2. **Exercise Library**: Browse exercises by category
3. **Muscle-based Navigation**: Find exercises by muscle groups
4. **Search Functionality**: Look up machines and exercises
5. **Exercise Logging**: Track your workout progress
6. **Video Tutorials**: View proper exercise techniques
7. **Exercise Details**: Get step-by-step instructions and common mistakes to avoid

## Installation & Setup

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn or pnpm
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)

### Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   - Create a `.env` file with the following:

   ```env
   EXPO_PUBLIC_BACKEND_URL=http://your-backend-url:8080
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   npx expo start
   ```

5. Use the Expo Go app to run on a physical device, or press 'a' for Android emulator or 'i' for iOS simulator

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
│   │   ├── ExercisePage.tsx  # Exercise details screen
│   │   ├── ExercisesPage.tsx # Exercise library screen
│   │   ├── MusclesPage.tsx   # Muscle groups screen
│   │   ├── ScanPage.tsx      # Camera scanning screen
│   │   ├── SearchPage.tsx    # Search functionality
│   │   └── SettingsPage.tsx  # App settings
│   └── _layout.tsx         # Root navigation layout
├── assets/                 # Static assets
│   ├── images/             # Image files
│   └── fonts/              # Custom fonts (Quicksand)
├── components/             # Reusable UI components
│   ├── common/             # Common UI elements
│   ├── exercise/           # Exercise-related components
│   └── muscle/             # Muscle-related components
├── styles/                 # Global styles
├── utils/                  # Utility functions
├── hooks/                  # Custom React hooks
├── services/               # API and other services
│   ├── dataService.ts      # Local data management
│   ├── exerciseService.ts  # Exercise API client
│   ├── machineService.ts   # Machine API client
│   ├── muscleService.ts    # Muscle API client
│   ├── requestService.ts   # HTTP request handling
│   └── cacheService.ts     # Data caching
├── types/                  # TypeScript type definitions
│   ├── exercise.ts         # Exercise types and classes
│   ├── machine.ts          # Machine types and classes
│   ├── muscle.ts           # Muscle types and classes
│   └── cache.ts            # Cache related types
├── mocks/                  # Mock data
├── constants/              # App constants
└── app.json                # Expo configuration
```

## Data Models

### Main Entities

- **Machine**: Represents gym equipment with associated exercises and muscles
- **Exercise**: Represents workout exercises with steps, videos, and logging capabilities
- **Muscle**: Represents muscle groups that are targeted by exercises

## Services Architecture

The app uses a service layer to communicate with the backend:

- **machineService**: Handles machine-related API calls
- **exerciseService**: Handles exercise-related API calls
- **muscleService**: Handles muscle-related API calls
- **dataService**: Manages local data storage and exercise logs
- **requestService**: Handles HTTP requests to the backend
- **cacheService**: Caches frequently used data for better performance

## Camera & Recognition Features

The scanning feature uses the device camera to recognize gym equipment:

1. The app accesses the camera using Expo Camera
2. When a piece of equipment is recognized, relevant information is displayed
3. Users can save equipment to their favorites for quick access

## State Management

- Local component state for UI components
- React Context for global state management
- AsyncStorage for persistent data
- Caching for frequently used data

## API Integration

The app connects to a backend API for:

- Exercise data and details
- Machine information
- Muscle group classifications
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

## Styling Approach

The app uses NativeWind (TailwindCSS for React Native) with custom configuration:

- Custom colors for consistent theming
- Custom font families (Quicksand)
- Responsive design adapting to different device sizes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For detailed contribution guidelines, see the [CONTRIBUTING.md](../CONTRIBUTING.md) file.
