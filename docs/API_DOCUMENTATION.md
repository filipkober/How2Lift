# How2Lift API Documentation

This document outlines the REST API endpoints provided by the How2Lift backend service.

## Base URL (not yet hosted)

All API endpoints are relative to the base URL:

```txt
https://api.how2lift.com/
```

For local development:

```txt
http://localhost:8080/
```

## Equipment Recognition

### Recognize Equipment

```bash
POST /ai/machines
```

Request:

- Content-Type: multipart/form-data
- Form field: `image` (binary image data)

Response:

```json
[
    {
        "id": 1,
        "name": "Leg Press",
        "description": "A simple machine for training quads",
        "imageUrl": "http://localhost:8080/files/legpress.png"
    }
]
```

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
