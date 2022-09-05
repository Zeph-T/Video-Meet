const jwt = require('jsonwebtoken');
const Q = require('q');
const User = require("../models/user");
const EmailValidator = require('email-validator');
const { OAuth2Client } = require("google-auth-library");



const client = new OAuth2Client(process.env.googleApiClientID);


async function VerifyTokenID(token) {
  let deferred = Q.defer();
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.googleApiClientID,
    });

    deferred.resolve({
      status : true
    })
  } catch (error) {
    deferred.reject({
      ok: false,
      message: "Some Error Occured",
      error: error,
    });
  }

  return deferred.promise;
}


const isAuthenticated = async(req) =>{
    let deferred = Q.defer();
    let token = req.headers.authorization;
    if (!token)
      deferred.reject({ message: "Not Authorized. Token missing" });
    else {
      try {
        token = token.split(" ")[1];
        const doc = jwt.verify(token, process.env.JWT_SECRET);
        let user = await User.findOne({_id : doc.userId}).lean();
        if(user){
          req.user = user;
          deferred.resolve({isValid : true});
        }
        else deferred.reject({message : "Not a Valid User!"});
      } catch (err) {
        deferred.reject({ message: "Unauthorized. Invalid Token" });
    }
  }
  return deferred.promise;
}


const validateUserEmail = (email, checkForExistingUser)=> {
  var deferred = Q.defer();
  if(!EmailValidator.validate(email)){
      deferred.reject('Invalid Email Provided');
  }else{
      if(checkForExistingUser){
        User.findOne({
            email : email
        },(err,user)=>{
            if(err){
                deferred.reject('Invalid Email Provided');
            }else{
                if(user){
                    deferred.reject('Existing User');
                }else{
                    deferred.resolve(true);
                }
            }
        })
    }
  }
  return deferred.promise;
}

const generateToken = (id) => {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 1000000); //Infinite Expiry!

  return jwt.sign(
    {
      userId: id,
      exp: exp.getTime() / 1000,
    },
    process.env.JWT_SECRET
  );
}

module.exports = {
    isAuthenticated , 
    validateUserEmail,
    generateToken,
    VerifyTokenID
}