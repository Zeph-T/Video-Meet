const { validateUserEmail , generateToken, VerifyTokenID } = require('./apiHelper');
const axios = require('axios');
const User = require('../models/user');


const signup = (req, res) => {
    try {
        let userInfo = req.body;
        console.log(req.body);
        userInfo.email = userInfo.email.toLowerCase();
        if (!userInfo.email || !userInfo.password || !userInfo.name || userInfo.password.length < 8) {
            if (userInfo.password.length < 8) {
                res.status(422);
                return res.send({ error: "Password Too Short" });
            } else {
                res.status(400);
                return res.send({ error: "Required Fields Error" });
            }
        }
        axios.get(`https://open.kickbox.com/v1/disposable/${userInfo.email}`).then(function (response) {
            return response.data;
        }).then(function (isDisposedData) {
            if (!isDisposedData.disposable) {
                validateUserEmail(userInfo.email, true, true).then(isValid => {
                    if (isValid) {
                        let newUser = new User;
                        newUser.name = userInfo.name;
                        newUser.email = userInfo.email;
                        newUser.password = newUser.generateHash(userInfo.password);
                        newUser.save(function (err) {
                            if (err) {
                                return res.status(400).send({ error: err.stack });
                            } else {
                                res.status(200).send({ message: 'User Created!' });
                            }
                        })
                    } else {
                        return res.status(408).send({ error: 'Cannot create an Email with this Email!' })
                    }
                }).catch(err => {
                    console.log(err);
                    return res.status(400).send({ error: err.stack });
                })
            } else {
                return res.status(500).send({ error: 'Error Saving the info!' });
            }
        }).catch(err => {
            console.log(err);
            return res.status(400).send(err.stack);
        })
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.stack);
    }
}

const login = (req, res) => {
    try {
        if(req.body && req.body.isOAuth){ // OAuth
            let {token , email , name } = req.body;
            VerifyTokenID(token).then(response=>{
                if(response.status){
                    User.findOne({email : email , isOAuth : true}).lean().then(oUser=>{
                        if(!oUser){
                            let newUser = new User({
                                name : name,
                                email : email,
                                isOAuth : true
                            })
                            newUser.save((err,user)=>{
                                if(err){
                                    console.log(err);
                                    return res.status(400).send({ error: 'Error creating the user' });
                                }else{
                                    return res.status(200).json({...user,authToken : generateToken(user._id)}); 
                                }
                            })
                        }
                        return res.status(200).json({...oUser,authToken : generateToken(oUser._id)}); 
                    })
                }else{
                    return res.status(400).send({error : "Could not verify the client"});
                }
            }).catch(err=>{
                return res.status(400).send({error : err.message});
            })
        }else{
            let userInfo = req.body;
            if (!userInfo || !userInfo.email || !userInfo.password) {
                return res.status(400).send({ error: 'Missing Fields!' });
            }
            User.findOne({
                email: userInfo.email
            }).then(user => {
                if (!user) {
                    return res.status(404).send({ error: 'Email Id not found!' });
                }
                if (user.validPassword(userInfo.password)) {
                    res.status(200).json({...user._doc,authToken : generateToken(user._id)});
                } else {
                    return res.status(400).send({ error: 'Password Invalid!' });
                }
            }).catch(err => {
                console.log(err);
                return res.status(400).send({ error: err.stack });
            })
        }
    } catch (err) {
        return res.status(400).send({ error: err.stack });
    }
}



module.exports = {
    login,
    signup,
}