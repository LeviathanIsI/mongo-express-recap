const express = require("express");
const app = express();
const port = 3000;
const characterController = require("./controllers/characterController");
require("./config/database");

app.use(characterController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
