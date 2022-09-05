const mongoose =require('mongoose');
const meetingSchema = mongoose.Schema({
    name : {type:String},
    passcode : {
        type : String
    },
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }
})



module.exports =  mongoose.model('Meeting',meetingSchema);