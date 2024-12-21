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