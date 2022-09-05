const mongoose = require("mongoose");
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
	},
	methods: ["POST", "GET"],
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Server Up and Running!");
});

// mongoose.connect(process.env.DB_CONN_STRING,(err)=>{
//     if(err)console.log(err);
//     console.log("Database Connected!");
// })

connections = {};
messages = {};
timeOnline = {};

io.on("connection", (socket) => {
	socket.on("join-call", (path) => {
		if (connections[path] === undefined) {
			connections[path] = [];
		}
		connections[path].push(socket.id);

		timeOnline[socket.id] = new Date();

		for (let a = 0; a < connections[path].length; ++a) {
			io.to(connections[path][a]).emit(
				"user-joined",
				socket.id,
				connections[path]
			);
		}

		if (messages[path] !== undefined) {
			for (let a = 0; a < messages[path].length; ++a) {
				io.to(socket.id).emit(
					"chat-message",
					messages[path][a]["data"],
					messages[path][a]["sender"],
					messages[path][a]["socket-id-sender"]
				);
			}
		}

		console.log(path, connections[path]);
	});

	socket.on("signal", (toId, message) => {
		io.to(toId).emit("signal", socket.id, message);
	});

	socket.on("chat-message", (data, sender) => {
		data = sanitizeString(data);
		sender = sanitizeString(sender);

		var key;
		var ok = false;
		for (const [k, v] of Object.entries(connections)) {
			for (let a = 0; a < v.length; ++a) {
				if (v[a] === socket.id) {
					key = k;
					ok = true;
				}
			}
		}

		if (ok === true) {
			if (messages[key] === undefined) {
				messages[key] = [];
			}
			messages[key].push({
				sender: sender,
				data: data,
				"socket-id-sender": socket.id,
			});
			console.log("message", key, ":", sender, data);

			for (let a = 0; a < connections[key].length; ++a) {
				io.to(connections[key][a]).emit(
					"chat-message",
					data,
					sender,
					socket.id
				);
			}
		}
	});

	socket.on("disconnect", () => {
		var diffTime = Math.abs(timeOnline[socket.id] - new Date());
		var key;
		for (const [k, v] of JSON.parse(
			JSON.stringify(Object.entries(connections))
		)) {
			for (let a = 0; a < v.length; ++a) {
				if (v[a] === socket.id) {
					key = k;

					for (let a = 0; a < connections[key].length; ++a) {
						io.to(connections[key][a]).emit("user-left", socket.id);
					}

					var index = connections[key].indexOf(socket.id);
					connections[key].splice(index, 1);

					console.log(key, socket.id, Math.ceil(diffTime / 1000));

					if (connections[key].length === 0) {
						delete connections[key];
					}
				}
			}
		}
	});
});

server.listen(PORT, () => {
	console.log(`Server Listening on PORT : ${PORT}`);
});
