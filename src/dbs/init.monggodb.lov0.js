const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/peanut";
// mongoose.connect((connectString).then(r => console.log('Connect to db success')).catch(e => console.log('Connect to db fail')))
mongoose
  .connect(connectString)
  .then((r) => console.log("Connect to db success"))
  .catch((e) => console.log("Connect to db fail"));
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}
module.exports = mongoose;
