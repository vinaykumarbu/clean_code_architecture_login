//  // create a user
//  const user = {
//     id: 1, 
//     username: 'vinaykumar',
//     email: 'vinay@gmail.com'
//   }

//   module.export = user


'use strict';

/**
 * This class will hold userdata and set, get functions
 */
module.exports = class User {
  constructor() {
    this.Users = [];
  }

  /**
   * AddUser will add the new user to the list
   * @param {*} UserData 
   */
  AddUser(UserData) {
    this.Users.push(UserData)

  }

  /**
  * GetUser will add the search and return the existing user
  * @param {*} Email
  */
  GetUser(Email) {
    return this.Users.filter(user => (user.Email === Email))[0]
   
  }

  /**
 * GetAllUser will return all the existing user
  */
  GetAllUsers() {
    return this.Users
  }

  /**
* IsValidUser will return true the user exist else false
* @param {*} Email
*/
  IsValidUser(Email) {
    return this.Users.some(user => user.Email === Email)
  }


}