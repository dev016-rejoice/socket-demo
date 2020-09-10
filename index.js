const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(express.json());

//CORS Middleware
app.use(cors({ origin: true }));

app.use(bodyParser.json({ limit: "1000mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "1000mb" }));

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.',
}));

const http = require('http').Server(app);

const io = require('socket.io')(http)

function setupSocket() {
    const socket = require("./socket");
    socket.setup(io);
}
setupSocket();

const port = process.env.PORT || 8080;

http.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

module.exports = app;
