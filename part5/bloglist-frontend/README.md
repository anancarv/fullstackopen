# Bloglist frontend

In this exercise, we will now create a frontend for the bloglist backend we created in the last part.
A login functionnality is also implemented for restricting the possibility to view and create blogs only by authenticated users. We assume that a user already exists with the good credentials.

Since the objective of this part is to test the react app, unit tests and end-to-end (E2E) tests with cypress are also implemented.

## Start the application locally

To start an application:

```bash
# First, you need to start the backend, to do so, head to the part4. Everything is explained in the README

# Install dependancies
$ npm install

# Start the frontend application
$ npm start

# For running E2E tests
$ npm run cypress:open        # Then, click on run all specs
```

You can then access the app on : http://localhost:3000/