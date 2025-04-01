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
- **File Storage**: Local file system with configurable path

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
- **File Storage**: Storage and retrieval of images and videos

## API Endpoints

### Muscles

- `GET /muscles` - Retrieve all muscles
- `GET /forms/muscles` - Web form to manage muscles
- `POST /forms/muscles` - Add new muscle groups

### Machines

- `GET /machines` - Retrieve all machines
- `GET /machines/{id}` - Retrieve a specific machine
- `GET /machines/{id}/exercises` - Get exercises for a machine
- `GET /machines/{id}/muscles` - Get muscles targeted by a machine
- `GET /forms/machines` - Web form to manage machines
- `POST /forms/machines` - Add new machines
- `POST /ai/machines` - Identify machines from images

### Exercises

- `GET /exercises` - Retrieve all exercises
- `GET /exercises/{id}` - Retrieve a specific exercise
- `GET /exercises/{id}/muscles` - Get muscles targeted by an exercise
- `GET /forms/exercises` - Web form to manage exercises
- `POST /forms/exercises` - Add new exercises

### File Management

- `GET /files` - List all uploaded files
- `GET /files/{filename}` - Retrieve a specific file
- `GET /files/{filename}/thumbnail` - Retrieve a video thumbnail
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

4. Configure file storage path:

   ```properties
   file.upload.dir=/path/to/uploaded/files
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

### Adding a New Entity

1. Create a model class
2. Create a repository interface
3. Implement service layer logic
4. Add controller endpoints
5. Write tests

### Error Handling

- Use custom exceptions where appropriate
- Return proper HTTP status codes
- Include error details in response bodies

## Security

- Password-protected admin forms
- Secure file uploads with validation
- Input validation and sanitization
- Error handling to prevent information leakage

## Database Schema

The application uses the following key entities:

- `Muscle`: Represents muscle groups
- `Machine`: Represents gym equipment
- `Exercise`: Represents workout exercises

These entities have relationships:

- Machines target specific muscle groups
- Exercises are performed on machines
- Exercises train specific muscle groups

### ER Diagram

```txt

Machine  -----<  Exercise
   |            /
   |           /
   v          v
Muscle  <-------------
```

## Testing

- Use JUnit for unit tests
- Use MockMvc for API endpoint tests
- Create test data fixtures for common scenarios

## Deployment

### Docker

```bash
# Build Docker image
docker build -t how2lift-backend .

# Run container
docker run -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod how2lift-backend
```

### Environment-specific Configuration

Use Spring profiles for different environments:

```properties
# application-dev.properties
# Development-specific settings

# application-prod.properties
# Production-specific settings
```

## Monitoring and Logging

- Use Spring Boot Actuator for health metrics
- Configure logging levels in application.properties
- Consider integrating with a log aggregation service

## Contributing

For contribution guidelines, please see the project [CONTRIBUTING.md](../CONTRIBUTING.md) file.

## License

[MIT License](../LICENSE)
