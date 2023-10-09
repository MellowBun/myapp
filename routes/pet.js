var express = require ('express');
var router = express.Router();
const crypto = require('node:crypto');

// mock some data
const pets = [
    {
        id: crypto.randomUUID(),
        name: "Tiny Terror Floof",
        breed: "Black Cat",
        notes: [
            "Is Deaf"
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "TAZ",
        breed: "Black Tabby Cat",
        notes: [
            "Is a Jerk"
        ]
    },
    {
        id: crypto.randomUUID(),
        name: "Rogue",
        breed: "Tabby Cat",
        notes: [
            "Is Fatty Fat Fat",
            "Sent me to the Hospital"
        ]
    },
];

// GET: read all
router.get('', (req, res) => {
    // get all pets
    res.status(200);
    res.json(pets);
});

// GET: get a single pet by id
router.get('/:id', (req, res) => {
    let targetPet;

    // find our pet by id
    targetPet = pets.filter(() => {
        // must return true or false
        return elem.id == req.params.id;
    })[0];

    // return that pet
    res.status(200);
    res.json(targetPet);
});

// POST: create a new pet
router.post('/', (req, res) => {

    var pet = {
        id: crypto.randomUUID(),
        name: req.body.name,
        breed: req.body.breed,
        notes: req.body.notes        
    };

    pets.push(pet);

    res.status(201);
    res.json({pets});
});

// PUT: update an existing pet
router.put('/:id', (req, res) => {

});

// DELETE: delete a pet
router.delete('/:id', (req, res) => {
    pets = pets.filter((elem) => {
        return elem.id != req.params.id;
    })

    res.status(200); // this is wrong
    res.json(pets);
});

module.exports = router;