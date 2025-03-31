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
- **UI Components**: Reusable UI elements
- **Services**: API communication, camera integration, state management
- **Screens**: Main application views

### Main Screens

- Authentication (Login/Registration)
- Equipment Scanner
- Exercise List View
- Exercise Detail View

## Backend Architecture

The backend follows a layered architecture pattern typical of Spring Boot applications:

### Layers

1. **Controller Layer**: REST API endpoints
2. **Service Layer**: Business logic and AI integration
3. **Repository Layer**: Data access
4. **Model Layer**: Domain entities

### Backend Key Components

- **Equipment Recognition Service**: Processes images to identify exercise equipment
- **Exercise Recommendation Service**: Uses AI to suggest appropriate exercises
- **Data Storage**: PostgreSQL database for persistent storage

## Data Model

Core entities in the application:

- **Equipment**: Types of gym equipment, usage instructions, categories
- **Exercise**: Workout movements associated with equipment
- **Workout**: Collections of exercises with repetitions, sets, etc.

## External Integrations

- **OpenAI Integration**: Used for image recognition and exercise recommendations
- **Cloud Storage**: For user media, equipment images, etc.

## Performance Considerations

- Caching frequently used data
- Optimized database queries
- Lazy loading of images and content
- Efficient image processing before sending to backend

## Future Extensibility

The architecture is designed to easily accommodate future features such as:

- Social sharing capabilities
- Workout tracking and statistics
- Integration with fitness wearables
- Premium subscription features
