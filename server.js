// khai báo port và khởi động server

const app = require("./src/app");
const http = require('http');
// const initializeWebSocketServer = require('./src/socket/web_socket');
const socketIo = require('./src/socket/socket');

const PORT = process.env.PORT || 3039;

// Tạo HTTP server
const server = http.createServer(app);

// Tích hợp WebSocket server

// initializeWebSocketServer(server);
server.listen(PORT, () => {
    console.log('server is running on port:', PORT);
});
socketIo(server)
// process.on('SIGINT', ()=>{
//     server.close(()=>{
//         console.log('Exit server');
//     })
// })