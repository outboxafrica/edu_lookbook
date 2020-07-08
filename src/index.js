require("dotenv").config();
const app = require("./server/app");
//import Database Connection Module
require('./server/config/connect');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server successfully started and listening on port ${port}`);
});
