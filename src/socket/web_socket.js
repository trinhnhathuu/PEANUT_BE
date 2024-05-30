const WebSocket = require('ws');

function initializeWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('New client connected');
        
        // viết trường hợp có hay lỗi

        ws.on('message', (message) => {
            console.log(`Received message => ${message}`);
            // Gửi tin những cho client
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send('Hello, you sent -> ' + message);
                }
            });
            // const responseData = `Server received: ${message}`;
            // ws.send(responseData);
        });

        ws.on('close', () => {
            console.log('Client has disconnected');
        });

        // Send a message to the client to test the connection
        ws.send('Welcome to the WebSocket server');
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