const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser());

// import environment variables
const { PORT } = require("./EnvironmentVariables")


//import user login api routes
const UserLogin = require('./routes/userlogin');

//import dashboard api routes
const Dashboard = require('./routes/dashboard');

// Refer: https://stackoverflow.com/a/51005461
// pass the api routes to the express application
app.use('/api',UserLogin)
app.use('/api',Dashboard)


//run the application on port 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));