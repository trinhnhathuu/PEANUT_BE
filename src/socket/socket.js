// Node.js (server.js)
const { Server } = require('socket.io')

function initializeSocketIO(server) {
    const io = new Server(server);
    console.log('aloo');
    io.on('connection', (socket) => {
        console.log('New client connected');
        socket.send("Hello!");
        // or with emit() and custom event names
        socket.emit('new-data', 'Hello from Node js!');      
        // handle the event sent with socket.send()
        socket.on("message", (data) => {
          console.log(data);
        });
        // Gửi một tin nhắn đến client để kiểm tra kết nối
        socket.send('Welcome to the WebSocket server');
    });
}



module.exports = initializeSocketIO;