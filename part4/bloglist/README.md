# Blog list

In this part we will be building a blog list application, that allows users to save information about interesting blogs they have stumbled across on the internet. For each listed blog we will save the author, title, url, and amount of upvotes from users of the application.

## Start the application locally

To start an application:

```bash
# Install dependancies
$ npm install

# create a .env file and put there the MONGODB_URI for connecting to your mongodb database
$ echo "MONGODB_URI=<YOUR-MONGODB-URI>" > .env
$ echo "TEST_MONGODB_URI=<YOUR-TEST-MONGODB-URI>" > .env
$ echo "DEV_MONGODB_URI=<YOUR-DEV-MONGODB-URI>" > .env

# Start the application
$ npm run dev
```

Once successfully connected, the app allows you to perform the following operations:
* Create, List, Update & Delete `Blogs` (POST, GET, PUT, DELETE)
* Create & List `Users` (POST, GET)

Those operations are possible using REST APIs on the following enpoints (add /ID for PUT & DELETE):
* http://localhost:3001/api/blogs
* http://localhost:3001/api/users


```json
# Sample paylod for blog
{
    "title":"Go To Statement Considered Harmful",
    "author":"Edsger W. Dijkstra",
    "url":"http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    "likes":5
}
# Sample paylod for user
{
    "username": "toto",
    "name": "toto",
    "password": "toto"
}
```