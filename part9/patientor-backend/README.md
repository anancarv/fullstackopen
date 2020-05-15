# Patientor Backend

For this set of exercises we will be developing a backend for an existing project called Patientor which is a simple medical record application for doctors who handle diagnoses and basic health information of their patients.

The [frontend](https://github.com/fullstack-hy2020/patientor) has already been built by outsider experts and our task is to create a backend to support the existing code.

## Start the application locally

To start an application:

```bash
# Install dependancies
$ npm install

# Start the application in dev environment
$ npm run dev

# Start the application in prod environment
$ npm run tsc  # Create a production build
$ npm start

# To start the frontend patientor app
# Open a new terminal and head to the patientor-frontend directory
$ cd ../patientor-frontend
$ npm install
$ npm start
```

Then the two following endpoints are accessible:
* http://localhost:3001/api/patients (POST)
* http://localhost:3001/api/diagnoses (GET)

To create a now patient (POST), the payload should look like this:
```json
{
    "name": "John McClane",
    "dateOfBirth": "1986-07-09",
    "ssn": "090786-122X",
    "gender": "male",
    "occupation": "New york city cop"
}
```