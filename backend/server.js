const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
connectDatabase();

// Hard coded secrets for cloudinary. Will move to env file later
cloudinary.config({
  cloud_name: 'diaklvavx',
  api_key: '137732596868362',
  api_secret: '_AWqOCCuWZhW6bptKAl0TrGuRG0',
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
