const User = require("../models/user");
const randomstring = require("randomstring");
const Meeting = require("../models/meeting");

const createMeeting = (req , res ) => {
    try{
        let newMeeting = new Meeting();
        newMeeting.createdBy = req.user._id;
        newMeeting.passcode = randomstring.generate(8);
        newMeeting.save((err,doc)=>{
            if(err){
                return res.status(400).send({error : err.stack});
            }else{  
                return res.status(200).send(doc);
            }
        })
    }catch(err){
        return res.status(400).send({error : err.stack});
    }
}


// const getMyCreatedMeetings = ( req,res ) => {

// }

module.exports = {
    createMeeting
}

