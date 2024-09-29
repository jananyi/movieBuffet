/**
 * @description checks for valid username and password on success returns jwt token
 * @param {object} requestBody
 * @returns returns the token on successful login
 */
const {Users} = require("../models/stepDbSchema");
const jwt = require("jsonwebtoken");
const login = async (requestBody) => {
  // logic for login
  const {userId,password} =requestBody;
  const userFound = await Users.findOne({userId: userId});
  if(userFound.password === password) {
    const token = jwt.sign({userId}, process.env.SECRET_KEY,{
      expiresIn: "3000s",
    });
    return token;
  }
};

/**
 * @description checks for valid username and password on success registers the user in user json file
 * @param {*} param - contains username password
 * @returns registered user
 */


const register = async (userParam) => {
  // logic to registerif (!password || !username) 
  
    const {userId, userName,password} = userParam;
    const user = new Users({
      userId,
      userName,
      password
    });
    console.log("createUser");
    const newUser = await user.save();
    return newUser;
  };

module.exports = { login, register };
