const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require('./router');
const ValidateJwt = require('./utils/ValidateJwt');
const queryText = require('./utils/DialogFlow');
const { getId, getName } = require('./utils/getUser');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
    }
});
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

io.use((socket, next) => {
    ValidateJwt.socketAuth(socket, next);  
})

io.on('connection', async (socket) => {
    const token = socket.handshake.auth.token;
    socket.uid = await getId(token);
    socket.name = await getName(token);

    await socket.on('join', async () => {
        await socket.join(socket.uid);
        await socket.emit('message', {
            name: 'vhiobot',
            text: `Hai ${socket.name}, Ada yang bisa vhiobot bantu?`
        });
    });

    await socket.on('sendMessage', async (message, callback) => {
        io.to(socket.uid).emit('message', { 
            name: socket.name,
            text: message,
        });
        callback();
    });


    await socket.on('askBot', async (message, callback) => {
        const response = await queryText(message);
        io.to(socket.uid).emit('message', { 
            name: 'vhiobot',
            text: response,
        });
        callback();
    });

});


server.listen(port, () => console.log('runnin..'));
