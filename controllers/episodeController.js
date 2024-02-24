// The model for interacting with the database
const Episode = require("../models/Episode");
const express = require("express");
const router = express.Router();

express.json();
express.urlencoded({ extended: true });

//SEED ROUTE - For developers to seed the database with data
router.get("/seed", (req, res) => {
  Episode.create([
    {
      title: "The Arrival of Raditz",
      episodeNumber: 1,
      airDate: "1989-04-26",
      description:
        "Goku and Piccolo are shocked when a mysterious alien warrior named Raditz lands on Earth, claims to be Goku's brother, and reveals the truth about Goku's origins.",
      characters: [
        "65da233fb2205c2615029807",
        "65da233fb2205c2615029809",
        "65da233fb2205c261502980b",
      ],
    },
    {
      title: "The World's Strongest Team",
      episodeNumber: 2,
      airDate: "1989-05-03",
      description:
        "Goku and Piccolo form an unlikely alliance to face the powerful Raditz together. They must put aside their differences to save Goku's son, Gohan.",
      characters: [
        "65da233fb2205c2615029807",
        "65da233fb2205c2615029809",
        "65da233fb2205c261502980b",
        "65da233fb2205c261502980d",
      ],
    },
    {
      title: "Gohan's Hidden Powers",
      episodeNumber: 3,
      airDate: "1989-05-10",
      description:
        "During the battle against Raditz, Gohan's hidden powers are unleashed unexpectedly when he sees his father in danger.",
      characters: [
        "65da233fb2205c2615029807",
        "65da233fb2205c2615029809",
        "65da233fb2205c261502980b",
      ],
    },
    {
      title: "Goku's Unusual Journey",
      episodeNumber: 4,
      airDate: "1989-05-17",
      description:
        "After the battle with Raditz, Goku finds himself in the Other World, embarking on a journey to King Kai's planet for training that is unlike any he has experienced before.",
      characters: [
        "65da233fb2205c2615029807",
        "65da233fb2205c2615029809",
        "65da233fb2205c261502980b",
      ],
    },
    {
      title: "Gohan's Metamorphosis",
      episodeNumber: 5,
      airDate: "1989-05-24",
      description:
        "Left alone in the wilderness, Gohan faces new dangers and a surprising transformation during the full moon.",
      characters: ["65da233fb2205c261502980b"],
    },
  ]).then((responseFromDatabase) => {
    console.log(responseFromDatabase);
  });
});

//I.N.D.U.C.E.S.

//INDEX ROUTE
//Try and catch with async/await
router.get("/", async (req, res) => {
  try {
    const allEpisodes = await Episode.find({});
    res.json({ allEpisodes });
  } catch (error) {
    res.json({ error });
  }
});

//NEW ROUTE
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    const deletedEpisode = await Episode.findByIdAndDelete(req.params.id);
    res.json({ deletedEpisode });
  } catch (error) {
    res.json({ error });
  }
});

//UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    const updatedEpisode = await Episode.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect(`/episodes/${updatedEpisode.id}`);
  } catch (error) {
    res.json({ error });
  }
});

//CREATE ROUTE
//Try and catch with async/await
router.post("/", async (req, res) => {
  try {
    const newEpisode = await Episode.create(req.body);
    res.redirect(`/episodes/${newEpisode.id}`);
  } catch (error) {
    res.json({ error });
  }
});

//EDIT ROUTE
router.get("/:id/edit", async (req, res) => {
  try {
    const foundEpisode = await Episode.findById(req.params.id);
    res.render("edit.ejs", { episode: foundEpisode });
  } catch (error) {
    res.json({ error });
  }
});

//SHOW ROUTE
//Try and catch with async/await
router.get("/:id", async (req, res) => {
  try {
    const foundEpisode = await Episode.findById(req.params.id).populate(
      "characters"
    );
    res.json({ foundEpisode });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
