var express = require ('express');
var router = express.Router();

// mock some data
const pets = [
    {
        id: 21,
        name: "Tiny Terror Floof",
        breed: "Black Cat",
        notes: [
            "Is Deaf"
        ]
    },
    {
        id: 13,
        name: "TAZ",
        breed: "Black Tabby Cat",
        notes: [
            "Is a Jerk"
        ]
    },
    {
        id: 42,
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
    // get a single pet
});

// POST: create a new pet
router.post('/', (req, res) => {

});

// PUT: update an existing pet
router.put('/:id', (req, res) => {

});

// DELETE: delete a pet
router.delete('/:id', (req, res) => {

});

module.exports = router;