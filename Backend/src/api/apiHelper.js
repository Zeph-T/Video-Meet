const jwt = require('jsonwebtoken');
const Q = require('q');
const User = require("")

const isAuthenticated = (req) =>{
    let deferred = Q.defer();
    let token = req.headers.authorization;
    if (!token)
      deferred.reject({ message: "Not Authorized. Token missing" });
    else {
      try {
        token = token.split(" ")[1];
        const doc = jwt.verify(token, process.env.JWT_SECRET);
        req.user = mongoose.Types.ObjectId(doc.userId.toString());
        deferred.resolve({isValid : true});
      } catch (err) {
        deferred.reject({ message: "Unauthorized. Invalid Token" });
    }
  }
}

module.exports = {
    isAuthenticated
}