# How2Lift Backend

## Overview

The How2Lift backend is built with Java and Spring Boot, providing RESTful API endpoints for the How2Lift mobile application. It handles machine recognition, exercise information, and muscle group data storage.

## Technology Stack

- **Language**: Java 11+
- **Framework**: Spring Boot 2.7+
- **Database**: PostgreSQL
- **ORM**: Spring Data JPA
- **Build Tool**: Maven/Gradle
- **AI Integration**: OpenAI API

## Architecture

The application follows a layered architecture:

- **Controller Layer**: Handles HTTP requests and responses
- **Service Layer**: Contains business logic
- **Repository Layer**: Data access and persistence
- **Model Layer**: Domain entities

## Key Components

- **Machine Recognition**: AI-powered gym equipment identification
- **Exercise Library**: Database of exercises with instructions
- **Muscle Groups**: Categorization of exercises by muscle groups
- **File Storage**: Storage and retrieval of images and other assets

## API Endpoints

### Muscles

- `GET /muscles` - Retrieve all muscles
- `GET /forms/muscles` - Web form to manage muscles
- `POST /forms/muscles` - Add new muscle groups

### Machines

- `GET /forms/machines` - Web form to manage machines
- `POST /forms/machines` - Add new machines
- `POST /ai/machines` - Identify machines from images

### Exercises

- `GET /forms/exercises` - Web form to manage exercises
- `POST /forms/exercises` - Add new exercises

### File Management

- `GET /files` - List all uploaded files
- `GET /files/{filename}` - Retrieve a specific file
- `POST /files` - Upload a new file

### AI Features

- `POST /ai/suggest/muscles` - Get AI-suggested muscle names
- `POST /ai/suggest/machines` - Get AI-suggested machines
- `POST /ai/suggest/exercises` - Get AI-suggested exercises

## Setup and Installation

### Prerequisites

- Java 11+ JDK
- PostgreSQL
- OpenAI API key

### Configuration

1. Configure database connection in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/how2lift
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

2. Set up OpenAI API key:

   ```properties
   openai.api.key=your_api_key
   ```

3. Set upload password:

   ```properties
   upload.password=your_secure_password
   ```

### Running the Application

```bash
# Using Maven
./mvnw spring-boot:run

# Using Gradle
./gradlew bootRun
```

### Building for Production

```bash
# Using Maven
./mvnw clean package

# Using Gradle
./gradlew clean build
```

## Development

### Project Structure

```txt
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── example/
│   │           └── backend/
│   │               ├── controller/  # HTTP endpoints
│   │               ├── service/     # Business logic
│   │               ├── repository/  # Data access
│   │               ├── model/       # Domain entities
│   │               ├── exception/   # Custom exceptions
│   │               └── record/      # DTOs
│   └── resources/
│       ├── application.properties  # Configuration
│       └── templates/              # Web templates
└── test/                           # Test code
```

## Security

- Password-protected admin forms
- Secure file uploads
- Input validation

## Database Schema

The application uses the following key entities:

- `Muscle`: Represents muscle groups
- `Machine`: Represents gym equipment
- `Exercise`: Represents workout exercises

These entities have relationships:

- Machines target specific muscle groups
- Exercises are performed on machines
- Exercises train specific muscle groups
