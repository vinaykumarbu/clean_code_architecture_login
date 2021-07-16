
// import JWT
const JWT = require('jsonwebtoken');



const UserClass = require('../models/UserData')
const User = new UserClass()

// import secret key to authenticate environment variables
const { SECRET_KEY } = require("../EnvironmentVariables")



//   signup method
/**
 * This function will sign up the user
 * @param {*} req 
 * @param {*} res 
 */
exports.Signup = (req, res) => {
  
  // take user details from req and add it to the list
  const { UserName, Email } = req.body;
  if (!UserName || !Email) {
    return res.json({ error: "UserName or Email is missing!" })
  }
  // if user already exist then return error
  if(User.IsValidUser(Email)){
    return res.json({ error: "User already exist" })
  }
  // add user to the exisintg list
  User.AddUser({ UserName, Email });
  res.json({ data: "Added user successfuly!" })
}

//   login method
/**
 * This function will sign in the user and return token
 * @param {*} req 
 * @param {*} res 
 */
exports.Login = (req, res) => {
  // take user details from req
  const { UserName, Email } = req.body;
  if (!UserName || !Email) {
    return res.json({ error: "UserName or Email is missing!" })
  }
  // get user data to login
  const LoginUser = User.GetUser( Email );
  // login if user had signed up
  if(LoginUser){
    // create a token to the added user
    JWT.sign({ userData:LoginUser }, SECRET_KEY, (err, token) => {
      res.json({
        token
      });
    });

  }
}

/**
 * This function will return the current user details
 * @param {*} req 
 * @param {*} res 
 */
exports.UserDetails = (req, res) => {
  // verify the token and validate
  JWT.verify(req.token, SECRET_KEY, (err, authData) => {
   
    if (err) {
      res.sendStatus(401);
    } else {
      // get existing user details
      const ExistingUser = User.GetUser( authData.userData.Email );
      // return userData
      res.json({ data:{userData: authData.userData, storedData: ExistingUser} })
       
    }
  });
}


/**
 * This function will return all the existing user
 * @param {*} req 
 * @param {*} res 
 */
 exports.UsersDetails = (req, res) => {
  // verify the token and validate
  JWT.verify(req.token, SECRET_KEY, (err, authData) => {
   
    if (err) {
      res.sendStatus(401);
    } else {
     
      // return all userData
      res.json({ data:User.GetAllUsers() })
       
    }
  });
}


// Verify Token
/**
 * This function will generate the token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.TokenGenerator = (req, res, next) => {
  // Get auth header value
  const BearerHeader = req.headers['authorization'];

  // Check if bearer is undefined
  if (typeof BearerHeader !== 'undefined') {
    // Split at the space
    //  Bearer <access_token>
    req.token = BearerHeader.split(' ')[1];

    next();
  } else {
    // Forbidden
    res.sendStatus(401);
  }

}