const mongoose = require('mongoose');

function getAllUsers(req, res) {
  mongoose.model('User').find({}, (err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
}

module.exports = getAllUsers;