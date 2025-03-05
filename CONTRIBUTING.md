# Contributing to How2Lift

Thank you for considering contributing to How2Lift! This document provides guidelines and instructions for contributing to the project.

## Development Process

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork to your local machine
3. Set up your development environment following the instructions in the README.md

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

## Code Style Guidelines

### Frontend (React Native)

- Use TypeScript for all new code
- Follow the existing component structure
- Use NativeWind for styling
- Format code using Prettier
- Use meaningful component and variable names

### Backend (Spring Boot)

- Follow standard Java naming conventions
- Use appropriate annotations and design patterns
- Document public methods and classes
- Write unit tests for new functionality

## Testing

- For frontend, write component tests using Jest
- For backend, write unit tests using JUnit
- Ensure all existing tests pass before submitting a PR

## Documentation

- Update README.md or other documentation files as necessary
- Add inline comments for complex logic
- Write clear API documentation for backend endpoints

## Questions?

If you have any questions about contributing, feel free to open an issue for discussion.
