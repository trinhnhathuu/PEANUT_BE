const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/peanutDev";
// const connectString = `${process.env.DATABASE_URL}`;
// mongoose.connect((connectString).then(r => console.log('Connect to db success')).catch(e => console.log('Connect to db fail')))
mongoose
  .connect(connectString)
  .then((r) => console.log("Connect to db success peanutDev"))
  .catch((e) => console.log("Connect to db fail peanutDev"));
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}
module.exports = mongoose;
