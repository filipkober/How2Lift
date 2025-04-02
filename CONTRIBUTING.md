# Contributing to How2Lift

Thank you for considering contributing to How2Lift! This document provides guidelines and instructions for contributing to the project.

## Development Process

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork to your local machine
3. Set up your development environment following the instructions in the README.md

#### Frontend Setup

```bash
cd How2Lift
npm install
# Create a .env file with:
# EXPO_PUBLIC_BACKEND_URL=http://localhost:8080
```

#### Backend Setup

```bash
cd backend
# Configure application.properties with database connection and OpenAI API key
./mvnw spring-boot:run
```

### Making Changes

1. Create a new branch from `develop`:

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/your-feature-name
   ```

   Use appropriate prefixes:
   - `feat/` for new features
   - `fix/` for bug fixes
   - `docs/` for documentation changes
   - `refactor/` for code refactoring
   - `test/` for adding or modifying tests

2. Make your changes and commit using descriptive commit messages:

   ```bash
   git commit -m "feat: add exercise recommendation algorithm"
   ```

3. Push your branch to your fork:

   ```bash
   git push origin feat/your-feature-name
   ```

4. Create a Pull Request to the `develop` branch of the main repository

### Pull Request Guidelines

- Each PR should address a single issue or feature
- Include a clear description of the changes made
- Link to any relevant issues using the appropriate syntax (e.g., "Fixes #123")
- Ensure all tests pass
- Update documentation if necessary
- Include screenshots for UI changes if applicable
- Add unit tests for new functionality

## Code Style Guidelines

### Frontend (React Native)

- Use TypeScript for all new code
- Follow the existing component structure
- Use NativeWind for styling

  ```tsx
  // Good
  <View className="flex-1 bg-background p-4">
  
  // Avoid
  <View style={{ flex: 1, backgroundColor: '#F5F5F5', padding: 16 }}>
  ```

- Format code using Prettier
- Use meaningful component and variable names
- Use the established service pattern for API calls and data handling
- Follow the existing class structure for models (Machine, Exercise, Muscle)
- Use proper type annotations for all variables and functions

### Backend (Spring Boot)

- Follow standard Java naming conventions
- Use appropriate annotations and design patterns
- Document public methods and classes with Javadoc
- Write unit tests for new functionality
- Use DTOs for API responses
- Validate input parameters
- Handle exceptions properly
- Follow RESTful API design principles

## Project Structure

### Frontend Structure

When adding new features, follow the established project structure:

```txt

app/                # Screens and navigation
components/         # Reusable UI components
services/           # API and data services
types/              # TypeScript definitions
```

### Backend Structure

```txt

src/main/java/com/example/backend/
├── controller/     # API endpoints
├── service/        # Business logic
├── repository/     # Data access
├── model/          # Domain entities
├── exception/      # Custom exceptions
└── record/         # DTOs
```

## Testing

### Frontend Testing

- Write Jest tests for components and services
- Test component rendering and interactions
- Test service methods and API calls
- Use React Testing Library for component tests

Example:

```tsx
import { render, screen } from '@testing-library/react-native';
import MyComponent from './MyComponent';

test('renders correctly', () => {
  render(<MyComponent />);
  expect(screen.getByText('Expected Text')).toBeDefined();
});
```

### Backend Testing

- Write JUnit tests for services and controllers
- Use Mockito for mocking dependencies
- Test both success and failure scenarios
- Test validation logic

Example:

```java
@Test
public void testGetExerciseById_Success() {
    Exercise exercise = new Exercise();
    exercise.setId(1L);
    when(exerciseRepository.findById(1L)).thenReturn(Optional.of(exercise));
    
    Exercise result = exerciseService.getExerciseById(1L);
    
    assertNotNull(result);
    assertEquals(1L, result.getId());
}
```

## Documentation

- Update README.md or other documentation files as necessary
- Add inline comments for complex logic
- Write clear API documentation for backend endpoints
- Document new environment variables or configuration settings
- Update architecture documentation for significant changes

### Documentation Style

- Use Markdown for all documentation
- Include code examples where helpful
- Use clear, concise language
- Organize content with headings and lists

## Commit Messages

We use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or updating tests
- `chore:` for maintenance tasks

Example:

```txt

feat: add exercise log functionality

- Add ExerciseLog component
- Create dataService methods for logging
- Add log visualization
```

## Versioning

We follow Semantic Versioning (SemVer):

- MAJOR version for incompatible API changes
- MINOR version for new functionality in a backward-compatible manner
- PATCH version for backward-compatible bug fixes

## Questions?

If you have any questions about contributing, feel free to open an issue for discussion or contact the maintainers directly.
