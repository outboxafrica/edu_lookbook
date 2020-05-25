require("dotenv").config();
const app = require("./server/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server successfully started and listening on port ${port}`);
});
