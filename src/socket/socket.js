// src/socket.js
const WebSocket = require('ws');

function initializeWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('New client connected');
        
        ws.on('message', (message) => {
            console.log(`Received message => ${message}`);
            ws.send('Hello, you sent -> ' + message);
        });

        ws.on('close', () => {
            console.log('Client has disconnected');
        });
    });

    return wss;
}

module.exports = initializeWebSocketServer;


// const socketIO = require('socket.io');

// function initializeSocketIO(server) {
//     const io = socketIO(server);

//     io.on('connection', (socket) => {
//         console.log('New client connected');

//         socket.on('message', (message) => {
//             console.log(`Received message => ${message}`);
//             // Gửi lại tin nhắn cho client
//             socket.emit('message', 'Hello, you sent -> ' + message);
//         });

//         socket.on('disconnect', () => {
//             console.log('Client has disconnected');
//         });
//     });

//     return io;
// }

// module.exports = initializeSocketIO;