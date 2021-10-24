const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

async function authenticate( email, token ) {
   
}

async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
