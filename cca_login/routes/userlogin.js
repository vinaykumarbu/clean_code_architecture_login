const express = require('express');
const route = express.Router();


// import required functions
const {Signup, Login , UserDetails,UsersDetails, TokenGenerator } = require('../usecases/LoginMethods')

// signup api
route.post('/dashboard/signup', Signup);

// login api
route.post('/dashboard/login', Login);

// get user detils api which requires token
route.get('/dashboard/user', TokenGenerator, UserDetails);

// get all users detils api which requires token
route.get('/dashboard/users', TokenGenerator, UsersDetails);


module.exports = route