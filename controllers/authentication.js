const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req,res,next) {
  // User has already had their email and password auth'd
  // We just need to give them a token

  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req,res,next) {
  const email = req.body.email;
  const password = req.body.password;

  if ( !email || !password) {
    return res.status(422).send({ error: 'You must provide an email and password' });
  }


  // If a user with the given email exists
  User.findOne({ email: email }, function(err, user) {
    // return an Error
    if (err) {
      return next(err);
    }
    // If a user with email does exist, return an Error
    if (user) {
      return res.status(422).send({ error: 'Email is already in use'});
    }
    // If a user with email does NOT exist, create and save user record
    const newUser = new User({
      email: email,
      password: password
    });
    newUser.save(function(err) {
      if (err) { return next(err); }
    });
    // Respond to request indicating the user was created
    res.json({ token: tokenForUser(newUser) });
  });
}
