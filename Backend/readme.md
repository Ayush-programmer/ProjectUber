# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON response with a token and user details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required).
  - `lastname`: A string with at least 3 characters (optional).
- `email`: A string representing a valid email address (required).
- `password`: A string with at least 6 characters (required).
- `token`: A jwt token.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response
### Success (201 Created)
If the user is successfully registered, the server will respond with a JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed-password",
    "socketId": null
  }
}
```

### Error (400 Bad Request)
If there are validation errors in the input data, the server will respond with a JSON object containing the validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must have atleast 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Status Codes
- `201 Created`: The user was successfully registered.
- `400 Bad Request`: There were validation errors in the input data.

## File Location
This documentation is for the endpoint defined in `Backend/routes/user.routes.js`.

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to authenticate a user. It validates the input data, checks the credentials, and returns a JSON response with a token and user details if the credentials are valid.

## Request Body
The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required).
- `password`: A string with at least 6 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response
### Success (200 OK)
If the credentials are valid, the server will respond with a JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed-password",
    "socketId": null
  }
}
```

### Error (401 Unauthorized)
If the credentials are invalid, the server will respond with a JSON object containing an error message.

Example:
```json
{
  "error": "Invalid email or password"
}
```

## Status Codes
- `200 OK`: The credentials are valid.
- `401 Unauthorized`: The credentials are invalid.

## File Location
This documentation is for the endpoint defined in `Backend/routes/user.routes.js`.

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint is used to register a new captain. It validates the input data, creates a new captain in the database, and returns a JSON response with the captain details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required).
  - `lastname`: A string with at least 3 characters (required).
- `email`: A string representing a valid email address (required).
- `password`: A string with at least 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters (required).
  - `plate`: A string with at least 3 characters (required).
  - `capacity`: An integer with at least 1 (required).
  - `type`: A string that must be one of ['car', 'motorcycle', 'auto'] (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "type": "car"
  }
}
```

## Response
### Success (201 Created)
If the captain is successfully registered, the server will respond with a JSON object containing the captain details.

Example:
```json
{
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "type": "car"
    }
  }
}
```

### Error (400 Bad Request)
If there are validation errors in the input data, the server will respond with a JSON object containing the validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must have atleast 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Status Codes
- `201 Created`: The captain was successfully registered.
- `400 Bad Request`: There were validation errors in the input data.

## File Location
This documentation is for the endpoint defined in `Backend/routes/captain.routes.js`.

# Captain Login Endpoint

## Endpoint
`POST /captains/login`

## Description
This endpoint is used to authenticate a captain. It validates the input data, checks the credentials, and returns a JSON response with a token and captain details if the credentials are valid.

## Request Body
The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required).
- `password`: A string with at least 6 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response
### Success (200 OK)
If the credentials are valid, the server will respond with a JSON object containing the authentication token and captain details.

Example:
```json
{
  "token": "your-auth-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "type": "car"
    }
  }
}
```

### Error (401 Unauthorized)
If the credentials are invalid, the server will respond with a JSON object containing an error message.

Example:
```json
{
  "error": "Invalid email or password"
}
```

## Status Codes
- `200 OK`: The credentials are valid.
- `401 Unauthorized`: The credentials are invalid.

## File Location
This documentation is for the endpoint defined in `Backend/routes/captain.routes.js`.

# Get Captain Profile Endpoint

## Endpoint
`GET /captains/profile`

## Description
This endpoint is used to retrieve the profile of the authenticated captain. It requires a valid authentication token.

## Response
### Success (200 OK)
If the authentication token is valid, the server will respond with a JSON object containing the captain's profile details.

Example:
```json
{
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "type": "car"
    }
  }
}
```

### Error (401 Unauthorized)
If the authentication token is invalid or missing, the server will respond with a JSON object containing an error message.

Example:
```json
{
  "error": "Unauthorized"
}
```

## Status Codes
- `200 OK`: The authentication token is valid.
- `401 Unauthorized`: The authentication token is invalid or missing.

## File Location
This documentation is for the endpoint defined in `Backend/routes/captain.routes.js`.

# Captain Logout Endpoint

## Endpoint
`GET /captains/logout`

## Description
This endpoint is used to log out the authenticated captain. It invalidates the authentication token.

## Response
### Success (200 OK)
If the captain is successfully logged out, the server will respond with a JSON object containing a success message.

Example:
```json
{
  "message": "Logout successfully"
}
```

### Error (401 Unauthorized)
If the authentication token is invalid or missing, the server will respond with a JSON object containing an error message.

Example:
```json
{
  "error": "Unauthorized"
}
```

## Status Codes
- `200 OK`: The captain was successfully logged out.
- `401 Unauthorized`: The authentication token is invalid or missing.

## File Location
This documentation is for the endpoint defined in `Backend/routes/captain.routes.js`.