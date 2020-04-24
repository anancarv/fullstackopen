# Redux anecdoce

In this exercise, we made a new version of the anecdote voting application from part 1 using Redux.
As a reminder, this application allows the user to vote between multiple anecdotes and then displays the most popular one.

This initial list of anecdotes is stored in the file `db.json`. This file is used by the tool `JSON Server` that acts as a backend server where the data are stored.

## Start the application

To start an application, do the following :

```bash
# Install dependancies
$ npm install

# Start the backend JSON server
$ npx json-server --port 3001 --watch db.json

# Start the application
$ npm start
```

You can then access the app on : [http://localhost:3000/](http://localhost:3000/)
You can also see the content of the JSON Server by heading to http://localhost:3001/anecdotes