const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECOND = 5000;
const countConnect = ()=>{
    const numConnection = mongoose.connections.length;
    console.log('numConnection', numConnection);
}

const checkOverload = ()=>{
    setInterval(()=>{
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnection = numCores * 5;

        console.log('Active numConnection', numConnection);
        console.log('Memory usage', memoryUsage/1024/1024, 'MB');
        if(numConnection > maxConnection){
            console.log('Server is overload');
        }
    if(numConnection > maxConnection){
        console.log('Server is overload');}
    }, _SECOND)

}
module.exports = {
    countConnect,
    checkOverload
}