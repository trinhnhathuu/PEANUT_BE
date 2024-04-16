// khai báo port và khởi động server

const app = require("./src/app");
// const port = 3039

const PORT = process.env.PORT || 3039;

const server = app.listen(PORT, () =>{
    console.log('server is running on port:', PORT);
})


// process.on('SIGINT', ()=>{
//     server.close(()=>{
//         console.log('Exit server');
//     })
// })