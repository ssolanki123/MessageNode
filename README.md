# Message Node Application

Created a single web page application to allow users to post, update, and delete messages that will be reflected on his or her status feed. Also, utilized web sockets to allow new posts to be reflected on other users' status feeds.
 
 ## Getting Started
 These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
 
## Prequisites
### npm package manager needs to be installed
### A live cluster on Mongo DB, with an active connection, needs to be created for application on local machine to connect to. Please reference <https://docs.mongodb.com/manual/installation/>  for installation instruction.

##Installation 
```
 npm install bycrptjs
 npm install body-parser
 npm install cors
 npm install express,
 npm install express-validator
 npm install jsonwebtoken
 npm install mongoose,
 npm install multer
 npm install graphql
 ```
###After installing the above packages, please open up app.js in backend-adding-auth-middleware-to-all-routes project to paste the connection string to connect to MonogDb cluster.
```nodejs
mongoose
  .connect(
    'TODO: Fill in MongoDB connection'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));
```

###Running the following command will get backend application running on port 8080
```
    npm start
```

##Technology Stack
* Express JS (backend)
* React JS (frontend)
* MongoDB (NoSQL Database)

## Authors

* **Sunny Solanki**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


