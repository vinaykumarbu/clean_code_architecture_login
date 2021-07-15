const express = require('express');
const route = express.Router();



const {dashboard, login, secured, tokenGenerator} = require('../methods/loginMethods')


// const tokenGenerator = require('../tokenGenerator')


// Main dashboard page without login required
route.get('/dashboard', dashboard);

// login api
route.post('/dashboard/login', login);

// api which requires token
route.post('/dashboard/secured', tokenGenerator, secured);


module.exports = route