// The model for interacting with the database
const Character = require("../models/Character");
const express = require("express");
const router = express.Router();

express.json();
express.urlencoded({ extended: true });

//SEED ROUTE - For developers to seed the database with data
router.get("/seed", (req, res) => {
  Character.create([
    {
      name: "Goku",
      gender: "Male",
      race: "Saiyan",
      baseki: "3000",
      totalki: "150000000",
      affiliation: "Z Fighters",
      img_url: "https://www.dragonballz.com/en/characters/goku",
    },
    {
      name: "Vegeta",
      gender: "Male",
      race: "Saiyan",
      baseki: "18000",
      totalki: "120000000",
      affiliation: "Z Fighters",
      img_url: "https://www.dragonballz.com/en/characters/vegeta",
    },
    {
      name: "Piccolo",
      gender: "Male",
      race: "Namekian",
      baseki: "408",
      totalki: "3500000",
      affiliation: "Z Fighters",
      img_url: "https://www.dragonballz.com/en/characters/piccolo",
    },
    {
      name: "Frieza",
      gender: "Male",
      race: "Frieza Race",
      baseki: "530000",
      totalki: "120000000",
      affiliation: "Frieza Force",
      img_url: "https://www.dragonballz.com/en/characters/frieza",
    },
    {
      name: "Gohan",
      gender: "Male",
      race: "Half-Saiyan",
      baseki: "1",
      totalki: "65000000",
      affiliation: "Z Fighters",
      img_url: "https://www.dragonballz.com/en/characters/gohan",
    },
    {
      name: "Trunks",
      gender: "Male",
      race: "Half-Saiyan",
      baseki: "5",
      totalki: "75000000",
      affiliation: "Z Fighters",
      img_url: "https://www.dragonballz.com/en/characters/trunks",
    },
    {
      name: "Krillin",
      gender: "Male",
      race: "Human",
      baseki: "206",
      totalki: "750000",
      affiliation: "Z Fighters",
      img_url: "https://www.dragonballz.com/en/characters/krillin",
    },
    {
      name: "Cell",
      gender: "Male",
      race: "Bio-Android",
      baseki: "900000",
      totalki: "100000000",
      affiliation: "Red Ribbon Army",
      img_url: "https://www.dragonballz.com/en/characters/cell",
    },
    {
      name: "Majin Buu",
      gender: "Male",
      race: "Majin",
      baseki: "9 Billion",
      totalki: "100 Trillion",
      affiliation: "Babidi's Forces",
      img_url: "https://www.dragonballz.com/en/characters/majin-buu",
    },
    {
      name: "Beerus",
      gender: "Male",
      race: "God of Destruction",
      baseki: "102 Billion",
      totalki: "100 Septillion",
      affiliation: "Gods of Destruction",
      img_url: "https://www.dragonballz.com/en/characters/beerus",
    },
  ]).then((responseFromDatabase) => {
    console.log(responseFromDatabase);
  });
});

//I.N.D.U.C.E.S.

//INDEX ROUTE
router.get("/", (req, res) => {
  Character.find({})
    .then((characterData) => {
      res.render("index.ejs", { characters: characterData });
    })
    .catch((error) => {
      res.json({ error });
    });
});

//NEW ROUTE
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//DELETE ROUTE
router.delete("/:id", (req, res) => {
  Character.findByIdAndDelete(req.params.id)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.redirect("/characters");
    })
    .catch((error) => {
      res.json({ error });
    });
});

//UPDATE ROUTE
router.put("/:id", (req, res) => {
  Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedCharacter) => {
      res.redirect(`/characters/${updatedCharacter.id}`);
    })
    .catch((error) => {
      res.json({ error });
    });
});

//CREATE ROUTE
router.post("/", (req, res) => {
  Character.create(req.body)
    .then((newCharacter) => {
      res.redirect(`/characters/${newCharacter.id}`);
    })
    .catch((error) => {
      res.json({ error });
    });
});

//EDIT ROUTE
router.get("/:id/edit", (req, res) => {
  Character.findById(req.params.id)
    .then((foundCharacter) => {
      res.render("edit.ejs", { character: foundCharacter });
    })
    .catch((error) => {
      res.json({ error });
    });
});

//SHOW ROUTE
router.get("/:id", (req, res) => {
  Character.findById(req.params.id)
    .then((characterData) => {
      res.render("show.ejs", { character: characterData });
    })
    .catch((error) => {
      res.json({ error });
    });
});

module.exports = router;
