const apiHelper = require("../api/apiHelper");
const MeetApi = require("../api/meeting");
module.exports = (router) =>{
    router.use(function(req,res,next){
        apiHelper.isAuthenticated(req).then(isValid=>{
            if(isValid){
                next();
            }else{
                res.status(400);
                return res.send({error:'Auth Token Expired'});
            }
        }).catch(err=>{
            res.status(400);
            return res.send({error : err});
        })
    })
    router.get('/',(req,res)=>{
        res.status(200);
        // console.log("In / route",req.user);
        return res.send({message : "Working!"} );
    });
    
    router.get("/createMeeting",MeetApi.createMeeting);


}