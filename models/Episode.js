const mongoose = require("mongoose");
const { Schema } = mongoose;

const episodeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  episodeNumber: { type: Number, required: true, unique: true },
  airDate: { type: Date, required: true },
  description: {
    type: String,
    required: true,
    default: "No description available",
    minLength: 20,
    maxLength: 300,
  },
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
