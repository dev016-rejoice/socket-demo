"use strict";

exports.setup = function (io) {

    io.on('connection', (socket) => {
        console.log("a user is connected")

        socket.on('disconnect', function () {
            console.log('disconnect')
        })

        socket.on('error', function (err) {
            console.log('received error from socket:', err)
        })
    })
};

module.exports = exports;