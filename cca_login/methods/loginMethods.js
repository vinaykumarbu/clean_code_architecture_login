const jwt = require('jsonwebtoken');
const userData = require('../userData/userData')
// secret key to authenticate
const secretKey ='vkbu'

//dashboard method
exports.dashboard = (req, res) => {
  return res.status(400).json({
      message: 'Welcome!'
    });
  }

//   login method
exports.login = (req, res) => {
    // create a token to the added user
jwt.sign({userData}, secretKey, (err, token) => {
    res.json({
   token
 });
});
}

exports.secured = (req, res) => {  
    // verify the token and validate
     jwt.verify(req.token, secretKey, (err, authData) => {
    if(err) {
      res.sendStatus(401);
    } else {
      res.json({
        message: 'You are in!!!!.',
        authData
      });
    }
  });
}

// Verify Token
exports.tokenGenerator = (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
        //  Bearer <access_token>
    req.token = bearerHeader.split(' ')[1];
    
    next();
  } else {
    // Forbidden
    res.sendStatus(401);
  }

}