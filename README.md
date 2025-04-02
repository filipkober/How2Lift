# How2Lift

A mobile application that allows users to scan gym/training equipment and receive a personalized list of exercises.

## Project Overview

How2Lift aims to simplify gym workouts by providing users with appropriate exercises for specific equipment through image recognition technology. Simply scan gym equipment with your phone camera, and the app will identify the equipment and suggest suitable exercises based on user preferences and fitness goals.

## Technology Stack

### Frontend

- React Native with Expo framework
- NativeWind for styling (TailwindCSS for React Native)
- Expo Router for navigation
- TypeScript
- Expo Camera for equipment scanning
- AsyncStorage for local data persistence

### Backend

- Spring Boot (Java)
- PostgreSQL database
- Spring AI with OpenAI integration
- Spring Data JPA
- RESTful API architecture

## Project Structure

### `/Backend`

Contains the Spring Boot backend application responsible for:

- Image processing and equipment recognition
- Exercise recommendations logic
- User data management
- API endpoints
- File management for exercise videos and images

### `/How2Lift`

Contains the React Native frontend application including:

- User interface components
- Camera integration for equipment scanning
- Exercise visualization and logging
- Exercise and machine search functionality
- User profile management

## Key Features

- **Machine Recognition**: Scan gym equipment to identify it
- **Exercise Library**: Access a comprehensive database of exercises
- **Muscle Group Navigation**: Browse exercises by muscle groups
- **Exercise Logging**: Track workout progress
- **Video Tutorials**: Watch proper exercise techniques
- **Personalized Recommendations**: Get exercise suggestions based on available equipment

## Getting Started

### Prerequisites

- Node.js (v18+)
- Java (JDK 22)
- PostgreSQL
- Android Studio (for Android development)
- Xcode (for iOS development, Mac only)
- OpenAI API key

### Frontend Setup

```bash
# Navigate to the frontend directory
cd How2Lift

# Install dependencies
npm install

# Start the development server
npm start
```

### Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Setup environment variables (see .env.example)
# Start the Spring Boot application
./mvnw spring-boot:run
```

## Project Documentation

- [API Documentation](docs/API_DOCUMENTATION.md) - Details on backend endpoints
- [Architecture](docs/ARCHITECTURE.md) - System architecture overview
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute to the project
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines

## Branching Strategy

We follow a Git Flow inspired branching strategy:

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feat/*`: Feature branches (e.g., `feat/camera-integration`)
- `fix/*`: Bug fix branches (e.g., `fix/login-issue`)

### Development Workflow

1. Create a branch from `develop` with appropriate prefix
2. Work on your task
3. Open a pull request to merge with `develop`
4. After code review, merge into `develop`
5. Periodically, `develop` is merged into `main` for releases

## License

[MIT License](LICENSE)
