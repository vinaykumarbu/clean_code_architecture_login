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