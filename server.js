const express = require("express");
const app = express();
const port = 3000;
require("./config/database");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
