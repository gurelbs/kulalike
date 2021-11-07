const usersRoute = require('./users/usersRoute');
const authLogin = require('./auth/authLogin');
const projectsRoute = require('./projects/projectsRoute');
const {Router} = require('express');
const api = Router();

api.use('/api', authLogin);
api.use('/api', usersRoute);
api.use('/api', projectsRoute);


module.exports = api;