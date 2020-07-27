require("dotenv").config();
//DataBase connection
require("./server/config/connect");

const app = require("./server/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Using environment: ${process.env.NODE_ENV}`);
  console.log(`Server successfully started and listening on port ${port}`);
});
