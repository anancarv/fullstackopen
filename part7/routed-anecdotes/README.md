# Routed anecdotes

In this exercise, we made a new version of the anecdote voting application from part 1 using React Router.

Indeed, the app were not very optimal. The address always stayed the same even though at times we are in different views. Each view should preferably have its own address, e.g. to make bookmarking possible. If the application were to grow bigger and we wanted to, for example, add separate views for each user and anecdote, then the navigation management of the application, would get overly complicated.

To fix this issue, we used the [React router](https://github.com/ReactTraining/react-router) library

## Start the application

To start an application, do the following :

```bash
# Install dependancies
$ npm install

# Start the application
$ npm start
```

You can then access the app on : [http://localhost:3000/](http://localhost:3000/)