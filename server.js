const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require('./router');
const ValidateJwt = require('./utils/ValidateJwt');
const queryText = require('./utils/DialogFlow');

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

io.on('connection', (socket) => {
    console.log(`We have a new connection!!! ${socket.name} ${socket.uuid}`);

    socket.on('join', async () => {
        socket.join(socket.uuid);
        socket.emit('message', {
            name: 'vhiobot',
            text: `Hai ${socket.name}, Ada yang bisa vhiobot bantu?`
        });
    });

    socket.on('sendMessage', async (message) => {
        io.to(socket.uuid).emit('message', { 
            name: socket.name,
            text: message,
        });
    });


    socket.on('askBot', async (message) => {
        const response = await queryText(message);
        io.to(socket.uuid).emit('message', { 
            name: 'vhiobot',
            text: response,
        });
    });

    socket.on('disconnect', () => {
         
    });

});


server.listen(port, () => console.log('runnin..'));
