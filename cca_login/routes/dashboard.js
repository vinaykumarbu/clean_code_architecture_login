const express = require('express');
const route = express.Router();

// import dashboard function
const {Dashboard} = require('../usecases/DashboardMethods')

// Main dashboard page without login required
route.get('/dashboard', Dashboard);

module.exports = route