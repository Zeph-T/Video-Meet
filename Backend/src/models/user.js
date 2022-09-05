const mongoose =require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name : {type:String},
    email : {
        type:String,
        lowercase : true
    },
    password : {type: String},
    isOAuth : {
        type : Boolean,
        default : false
    }
})


userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

module.exports =  mongoose.model('User',userSchema);