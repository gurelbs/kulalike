const getAllUsersRoute = require('./users/allUsersRoute');
const authLogin = require('./auth/authLogin');
const {Router} = require('express');
const api = Router();

const appUse = func => api.use('/api', func);

appUse(authLogin);
appUse(getAllUsersRoute);

module.exports = api;