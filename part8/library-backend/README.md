## GraphQL backend

Through the exercises, we will implement a GraphQL backend for a small library.


### Start the application locally
First create a `.env` file with the following content:
```
MONGO_PWD=<YOUR-MONGO-PWD>
JWT_SECRET=<YOUR-JWT-SECRET>
PASSWORD=<YOUR-PASSWORD>          # All users have the same password, we focus here on GraphQL
```

To start an application:
```bash
# Install dependancies
$ npm install

# Start the application
$ npm run dev
```

You can then access the GraphQL-playground on: http://localhost:4000/. 

This is a very useful tool for a developer, and can be used to make queries to the server.