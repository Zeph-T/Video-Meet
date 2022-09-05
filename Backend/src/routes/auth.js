const UserApi = require("../api/user");


module.exports = (router) =>{
    router.post("/login",UserApi.login);
    router.post("/signup",UserApi.signup);

}