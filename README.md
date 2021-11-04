# The Dissidents
## Software Tools in Javascript - OAuth

**Contributors**: Nancy Zhao, Jonathan Libby, David Chen

**Class**: CSC302 @ University of Toronto

## Quick start

1. Visit our sample frontend client [here](https://oauth-client.lib.by/) to get started.
2. Login via OAuth with the following test credentials:

		Username: test-user
		Password: test-password

3. The auth server will automatically redirect you to the client if the authentication was successful and display the mock dashboard.

## Deployment

Sample frontend (client) is deployed at [https://oauth-client.lib.by/](https://oauth-client.lib.by/). To run the client locally, simply open `sample-frontend/index.html` in a web browser.

Auth server is deployed at [https://oauth-server.lib.by/](https://oauth-server.lib.by/). See `server/README.md` for more detailed deployment information.

## Directory Structure
- `Docs`
  - `minutes.md` Meeting minutes
  - `A1.md` Contains preliminary project development plan and milestones
  - `A2.md` Contains A1 postmortem, delegation of subtasks
  - `flow.svg` Acceptance criteria flow chart
- `sample-frontend` Sample frontend client that calls the Auth server
  - `index.html` Client's home page
  - `dashboard.html` Mock dashboard that is shown once the client is successfully authenticated
- `server` Auth server
  - `frontend` Contains the static frontend files that are served by the auth server
    - `login.html` Login page
    - `success.html` Page is displayed after successful authentication
  - `app.js` Express.js app entry point
  - `README.md` Contains more detailed information regarding the auth server, including documentation for the REST endpoints and installation instructions