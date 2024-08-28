const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect('mongodb+srv://gaganashetty07:hQR1wi2AY4Jm5kUW@cluster0.pdrn5dg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
