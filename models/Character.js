const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  race: { type: String, required: true },
  baseki: { type: String, required: true },
  totalki: { type: String, required: true },
  affiliation: { type: String, required: true },
  img: { type: String },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
