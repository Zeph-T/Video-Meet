const mongoose = require("mongoose");
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server , {
    cors : {
        origin : "*"
    },
    methods : ["POST" , "GET"]
});




app.use(cors());

const PORT = process.env.PORT || 5000;


app.get("/",(req,res) => {
    res.send("Server Up and Running!");
})

mongoose.connect(process.env.DB_CONN_STRING,(err)=>{
    if(err)console.log(err); 
    console.log("Database Connected!");
})


io.on('connection' , (socket) => {
    socket.emit('me' , socket.io);


    socket.on('disconnect' , () => {
        socket.broadcast.emit('Call Ended');
    })


    socket.on('calluser' , (payload) => {
        console.log(payload);
        const {userId , meetId , signalData , meetingLink } = payload;
        io.to(userId).emit('calluser' , { signal : signalData , ...payload } );
    })


    socket.on('answercall' , (data) => {
        io.to(data.to).emit('call accepted' , data,signal)
    })


})


server.listen(PORT, () => {
    console.log(`Server Listening on PORT : ${PORT}`);
})





