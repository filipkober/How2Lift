# How2Lift Application Architecture

This document provides an overview of the How2Lift application architecture, explaining the key components and their interactions.

## System Overview

How2Lift is a mobile application with a client-server architecture:

1. **Mobile Frontend** (React Native): User-facing application handling UI, camera interactions, and exercise visualization
2. **Backend Server** (Spring Boot): Processes equipment recognition, and delivers exercise recommendations

```txt
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  React Native   │◄────►│  Spring Boot    │
│  Mobile App     │      │  Backend        │
│                 │      │                 │
└─────────────────┘      └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │                 │
                         │  PostgreSQL     │
                         │  Database       │
                         │                 │
                         └─────────────────┘
```

## Frontend Architecture

The mobile application follows a component-based architecture using React Native and Expo:

### Frontend Key Components

- **Navigation**: Expo Router for screen navigation
- **UI Components**: Reusable UI elements using NativeWind for styling
- **Services**:
  - API communication (`requestService`)
  - Entity-specific services (`machineService`, `exerciseService`, `muscleService`)
  - Local data management (`dataService`, `cacheService`)
  - Camera integration for equipment scanning
- **Screens**: Main application views organized in tab-based navigation

### Main Screens

- **Search Page**: Browse and search for machines and exercises
- **Exercise Page**: View exercise details, videos, and track workout progress
- **Muscles Page**: Browse exercises by muscle groups
- **Scan Page**: Camera scanning for equipment recognition
- **Settings Page**: User preferences and app configuration

### Data Flow

1. User interacts with the UI
2. UI components call appropriate service methods
3. Services make API requests to the backend or access local storage
4. Data is rendered in UI components

### Type System

The frontend uses TypeScript with a class-based model approach:

- `Machine` class: Represents gym equipment with related exercises and muscles
- `Exercise` class: Represents workout exercises with tracking capabilities
- `Muscle` class: Represents muscle groups

## Backend Architecture

The backend follows a layered architecture pattern typical of Spring Boot applications:

### Layers

1. **Controller Layer**: REST API endpoints
   - `MuscleController`: Endpoints for muscle data
   - `MachineController`: Endpoints for machine data
   - `ExerciseController`: Endpoints for exercise data
   - `FileController`: Endpoints for file management
   - `AIController`: Endpoints for AI-powered features

2. **Service Layer**: Business logic and AI integration
   - `MuscleService`: Muscle-related operations
   - `MachineService`: Machine-related operations
   - `ExerciseService`: Exercise-related operations
   - `FileService`: File upload/download operations
   - `AIService`: AI integration for equipment recognition and suggestions

3. **Repository Layer**: Data access
   - JPA repositories for database operations

4. **Model Layer**: Domain entities
   - `Muscle`: Represents muscle groups
   - `Machine`: Represents gym equipment
   - `Exercise`: Represents workout exercises

### Backend Key Components

- **Equipment Recognition Service**: Processes images to identify exercise equipment
- **Exercise Recommendation Service**: Uses AI to suggest appropriate exercises
- **File Management Service**: Handles file uploads and retrieval
- **Data Storage**: PostgreSQL database for persistent storage

## Data Model

Core entities in the application:

### Machine

- ID
- Name
- Description
- Image URL
- List of exercises
- List of trained muscles

### Exercise

- ID
- Name
- Description
- Video URL
- Steps (instructions)
- Common mistakes
- Associated machine
- Targeted muscles
- Repetition type

### Muscle

- ID
- Name

### Exercise Log Item

- ID (UUID)
- Exercise ID
- Date
- Weight
- Repetitions
- Sets
- Notes

## Backend Data Flow

### Machine Recognition Flow

1. User captures image of gym equipment using camera
2. Image is sent to backend API
3. Backend processes image using AI
4. Backend returns identified machine(s)
5. Frontend displays machine details and associated exercises

### Exercise Logging Flow

1. User selects an exercise
2. User inputs exercise data (reps, sets, weight)
3. Data is stored locally using AsyncStorage
4. User can view historical data for each exercise

## External Integrations

- **OpenAI Integration**: Used for image recognition and exercise recommendations
- **Cloud Storage**: For user media, equipment images, etc.

## Security Considerations

- Password-protected admin forms for content management
- Secure file uploads with validation
- Input validation and sanitization
- Error handling to prevent information leakage

## Performance Optimizations

- **Client-side Caching**: The frontend caches frequently accessed data (muscles, etc.)
- **Image Optimization**: Videos include thumbnail access for preview images
- **Lazy Loading**: Components and assets are loaded only when needed
- **Efficient API Design**: Endpoints return only necessary data

## Future Extensibility

The architecture is designed to easily accommodate future features such as:

- **User Authentication**: Account creation and login
- **Workout Plans**: Pre-defined or custom workout routines
- **Progress Tracking**: Charts and analytics of workout history
- **Social Features**: Sharing workouts and achievements
- **Wearable Integration**: Connecting with fitness trackers
- **Offline Mode**: Full functionality without internet connection

## Testing Strategy

### Frontend Testing

- Unit tests for components and services
- Integration tests for screen workflows
- End-to-end tests for critical user journeys

### Backend Testing

- Unit tests for services and controllers
- Integration tests for API endpoints
- Database integration tests
