# User Registration API Documentation

## Register User
Endpoint for registering new users in the system.

### Endpoint
```
POST /users/register
```

### Request Body
| Field      | Type   | Required | Description                    |
|------------|--------|----------|--------------------------------|
| name       | string | Yes      | User's full name              |
| email      | string | Yes      | User's email address          |
| password   | string | Yes      | User's password               |
| phone      | string | Yes      | User's phone number           |

### Example Request
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "phone": "1234567890"
}
```

### Response Status Codes
| Status Code | Description                                           |
|------------|-------------------------------------------------------|
| 201        | User successfully registered                           |
| 400        | Bad request - Missing or invalid required fields       |
| 409        | Conflict - Email already exists                        |
| 500        | Internal server error                                  |

### Success Response
```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "userId": "12345",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Email already exists"
}
```
