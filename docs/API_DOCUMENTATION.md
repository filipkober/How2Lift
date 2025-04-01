# How2Lift API Documentation

This document outlines the REST API endpoints provided by the How2Lift backend service.

## Base URL

All API endpoints are relative to the base URL:

```txt
https://api.how2lift.com/  # Production (not yet hosted)
http://localhost:8080/      # Development
```

## API Endpoints

### Muscle Endpoints

#### Get All Muscles

```txt
GET /muscles
```

Response:

```json
[
  {
    "id": 1,
    "name": "Quadriceps"
  },
  {
    "id": 2,
    "name": "Hamstrings"
  }
]
```

### Machine Endpoints

#### Get All Machines

```txt
GET /machines
```

Response:

```json
[
  {
    "id": 1,
    "name": "Leg Press",
    "muscleNames": ["Quadriceps", "Hamstrings"],
    "imageUrl": "http://localhost:8080/files/legpress.png"
  },
  {
    "id": 2,
    "name": "Lat Pulldown Machine",
    "muscleNames": ["Lats", "Biceps", "Shoulders"],
    "imageUrl": "http://localhost:8080/files/latpulldown.png"
  }
]
```

#### Get Machine by ID

```txt
GET /machines/{id}
```

Parameters:

- `id` - Machine ID

Response:

```json
{
  "id": 1,
  "name": "Leg Press",
  "description": "A machine for training leg muscles",
  "imageUrl": "http://localhost:8080/files/legpress.png",
  "exerciseIds": [1, 2, 3],
  "trainedMuscleIds": [1, 2]
}
```

#### Get Exercises by Machine ID

```txt
GET /machines/{id}/exercises
```

Parameters:

- `id` - Machine ID

Response:

```json
[
  {
    "id": 1,
    "name": "Standard Leg Press",
    "description": "Basic leg press movement",
    "videoUrl": "http://localhost:8080/files/standard-leg-press.mp4",
    "steps": ["Sit on the machine", "Place feet on platform", "Push the platform"],
    "commonMistakes": ["Locking knees", "Using too much weight"],
    "machineId": 1,
    "trainedMuscleIds": [1, 2],
    "repType": "STANDARD"
  }
]
```

#### Get Muscles by Machine ID

```txt
GET /machines/{id}/muscles
```

Parameters:

- `id` - Machine ID

Response:

```json
[
  {
    "id": 1,
    "name": "Quadriceps"
  },
  {
    "id": 2,
    "name": "Hamstrings"
  }
]
```

### Exercise Endpoints

#### Get All Exercises

```txt
GET /exercises
```

Response:

```json
[
  {
    "id": 1,
    "name": "Standard Leg Press",
    "muscleNames": ["Quadriceps", "Hamstrings"],
    "videoUrl": "http://localhost:8080/files/standard-leg-press.mp4"
  },
  {
    "id": 2,
    "name": "Wide Leg Press",
    "muscleNames": ["Quadriceps", "Hamstrings", "Glutes"],
    "videoUrl": "http://localhost:8080/files/wide-leg-press.mp4"
  }
]
```

#### Get Exercise by ID

```txt
GET /exercises/{id}
```

Parameters:

- `id` - Exercise ID

Response:

```json
{
  "id": 1,
  "name": "Standard Leg Press",
  "description": "Basic leg press movement",
  "videoUrl": "http://localhost:8080/files/standard-leg-press.mp4",
  "steps": [
    "Sit on the machine",
    "Place feet on platform",
    "Push the platform"
  ],
  "commonMistakes": [
    "Locking knees",
    "Using too much weight"
  ],
  "machineId": 1,
  "trainedMuscleIds": [1, 2],
  "repType": "STANDARD"
}
```

#### Get Muscles by Exercise ID

```txt
GET /exercises/{id}/muscles
```

Parameters:

- `id` - Exercise ID

Response:

```json
[
  {
    "id": 1,
    "name": "Quadriceps"
  },
  {
    "id": 2,
    "name": "Hamstrings"
  }
]
```

### File Management

#### Get File

```txt
GET /files/{filename}
```

Parameters:

- `filename` - Name of the file to retrieve

Response:

- Binary file data with appropriate content type

#### Get Video Thumbnail

```txt
GET /files/{filename}/thumbnail
```

Parameters:

- `filename` - Name of the video file

Response:

- Binary image data (thumbnail of the video)

### AI Features

#### Identify Machines

```txt
POST /ai/machines
```

Request:

- Content-Type: `multipart/form-data`
- Form field: `file` (binary image data)

Response:

```json
[
  {
    "id": 1,
    "name": "Leg Press",
    "description": "A machine for training leg muscles",
    "imageUrl": "http://localhost:8080/files/legpress.png",
    "trainedMuscles": [
      {
        "id": 1,
        "name": "Quadriceps"
      },
      {
        "id": 2,
        "name": "Hamstrings"
      }
    ]
  }
]
```

#### Get AI-Suggested Muscles

```txt
POST /ai/suggest/muscles
```

Response:

```json
[
  "Latissimus Dorsi",
  "Deltoids",
  "Trapezius"
]
```

#### Get AI-Suggested Machines

```txt
POST /ai/suggest/machines
```

Response:

```json
[
  {
    "id": null,
    "name": "Chest Press",
    "description": "Machine for chest development",
    "imageUrl": null,
    "trainedMuscles": [
      {
        "id": 3,
        "name": "Pectoralis"
      }
    ]
  }
]
```

#### Get AI-Suggested Exercises

```txt
POST /ai/suggest/exercises
```

Response:

```json
[
  {
    "id": null,
    "name": "Seated Row",
    "description": "Back exercise for mid-back development",
    "steps": "Sit on the machine with feet on platform...",
    "commonMistakes": "Rounding the back, using too much momentum...",
    "videoUrl": "https://example.com/seated-row.mp4",
    "trainedMuscles": [
      {
        "id": 4,
        "name": "Latissimus Dorsi"
      }
    ]
  }
]
```

## Web Forms

These endpoints are for admin use and provide HTML forms:

- `GET /forms/muscles` - Manage muscle groups
- `POST /forms/muscles` - Add new muscle groups
- `GET /forms/machines` - Manage machines
- `POST /forms/machines` - Add new machines
- `GET /forms/exercises` - Manage exercises
- `POST /forms/exercises` - Add new exercises
- `GET /files` - Manage file uploads
- `POST /files` - Upload a new file

## Error Handling

All endpoints may return the following error responses:

- **400 Bad Request**: Invalid input parameters
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server-side error

Error response format:

```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "Invalid input parameters",
  "timestamp": "2023-10-15T10:30:00Z",
  "path": "/api/v1/exercises/invalid-id"
}
```

## Authentication

Most endpoints require password authentication for write operations. This is typically provided via a `password` parameter for form submissions.

## Data Models

### Machine

```json
{
  "id": 1,
  "name": "Leg Press",
  "description": "A machine for training leg muscles",
  "imageUrl": "http://localhost:8080/files/legpress.png",
  "exerciseIds": [1, 2, 3],
  "trainedMuscleIds": [1, 2]
}
```

### Exercise

```json
{
  "id": 1,
  "name": "Standard Leg Press",
  "description": "Basic leg press movement",
  "videoUrl": "http://localhost:8080/files/standard-leg-press.mp4",
  "steps": ["Sit on the machine", "Place feet on platform", "Push the platform"],
  "commonMistakes": ["Locking knees", "Using too much weight"],
  "machineId": 1,
  "trainedMuscleIds": [1, 2],
  "repType": "STANDARD"
}
```

### Muscle

```json
{
  "id": 1,
  "name": "Quadriceps"
}
```

### Exercise Log Item

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "exerciseId": 1,
  "date": "2023-10-15T10:30:00Z",
  "weight": 100,
  "reps": 12,
  "sets": 3,
  "note": "Felt strong today"
}
```
