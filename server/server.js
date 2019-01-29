const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
    console.log("New user connected");

    socket.emit("newMessage", {
        from: "bob@example.com",
        test: "Do you like my message",
        createAt: 123
    });

    socket.on("createMessage", message => {
        console.log("createMessage", message);
    });

    socket.on("disconnect", socket => {
        console.log("User was disconnected");
    });

    socket.on("createEmail", newEmail => {
        console.log("Create email", newEmail);
    });
});

server.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});
