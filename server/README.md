# OAuth Server

## Getting started

1. [Install node.js](https://nodejs.org/en/)
    - Node.js is an asychronous event-driven JavaScript runtime
    - Download the latest version for your operating system
2. Install server dependencies in the root directory `server` with `npm install`
3. Run the OAuth server app in the root directory `server` with `npm start`
    - This starts the server app on port 3000
    - To run in development mode, use `npm dev`. This will automatically restart the server every time the code changes.

### Node Dependencies

These are installed during Step 2.

- **express**: web application framework
- **uuid**: creation of RFC4122 (a specification version) UUIDs

Development dependencies:
- **nodemon**: Used for running in development mode
- **jest** and **supertest**: Unit testing for the auth server

## Testing

Functionality of the following authentication server endpoints is covered by unit tests. To run them, run `npm test` after installing dependencies.

## Server Routing

The routes, HTTP methods, and expected request and response structures.

### GET /login

request: empty
response: HTML file of login page

### POST /login

request:

```json
{
    username: String,
    password: String,
    url: String
}
```

response:

```json
{
    token: String
}
```

### GET /verify

request:

```json
{
    token: String
}
```

response: HTTP status

## Current Usage

There is one user in the `Users` dictionary, with username 'test-user' and password 'test-password'.
