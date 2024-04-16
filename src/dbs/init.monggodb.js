const mongoose = require("mongoose");
const { db: { host, name, port } } = require('../configs/config.mongdb')
const connectString = `mongodb://${host}:${port}/${name}`
// mongoose.connect((connectString).then(r => console.log('Connect to db success')).catch(e => console.log('Connect to db fail')))
class Database {
  constructor() {
    this._connect();
  }
  _connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString,{maxPoolSize:50})
      .then((r) => console.log(`connectString ${connectString}`))
      .catch((e) => console.log("Connect to db fail"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongodb = Database.instance;
module.exports = instanceMongodb;
