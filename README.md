# How2Lift

A mobile application that allows users to scan gym/training equipment and receive a personalized list of exercises.

## Project Overview

How2Lift aims to simplify gym workouts by providing users with appropriate exercises for specific equipment through image recognition technology. Simply scan gym equipment with your phone camera, and the app will identify the equipment and suggest suitable exercises based on user preferences and fitness goals.

## Technology Stack

### Frontend

- React Native with Expo framework
- NativeWind for styling
- Expo Router for navigation
- TypeScript

### Backend

- Spring Boot (Java)
- PostgreSQL database
- Spring AI with OpenAI integration
- Spring Data JPA

## Project Structure

### `/Backend`

Contains the Spring Boot backend application responsible for:

- Image processing and equipment recognition
- Exercise recommendations logic
- User data management
- API endpoints

### `/How2Lift`

Contains the React Native frontend application including:

- User interface components
- Camera integration for equipment scanning
- Exercise visualization
- User profile management

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
