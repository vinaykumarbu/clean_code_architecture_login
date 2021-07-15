const express = require('express');
const app = express();


//import api routes
const loginRoutes = require('./routes/loginRouters');


// Refer: https://stackoverflow.com/a/51005461
// pass the api routes to the express application

app.use('/api',loginRoutes)


//run the application on port 3000
app.listen(3000, () => console.log('Server started on port 3000'));