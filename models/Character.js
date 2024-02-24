const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  race: { type: String, required: true },
  baseki: { type: Number, required: true },
  totalki: { type: Number, required: true },
  affiliation: { type: String, required: true },
  img: { type: URL },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
