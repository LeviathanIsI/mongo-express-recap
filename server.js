const express = require("express");
const app = express();
const port = 3000;
const characterController = require("./controllers/characterController");
const episodesController = require("./controllers/episodeController");
require("./config/database");

// You can define the start of the route in the app.use method
app.use("/characters", characterController);
app.use("/episodes", episodesController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
