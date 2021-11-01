const usersRoute = require('./users/usersRoute');
const authLogin = require('./auth/authLogin');
const projectsRoute = require('./projects/projectsRoute');
const {Router} = require('express');
const api = Router();

const appUse = func => api.use('/api', func);

appUse(authLogin);
appUse(usersRoute);
appUse(projectsRoute);

module.exports = api;