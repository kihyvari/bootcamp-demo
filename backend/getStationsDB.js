const pgp = require('pg-promise')();

const db = pgp ({
    host: 'localhost',
    port: 5432,
    database: '', //TODO
    user: 'postgres',
    password: 'postgres',
});

const getStations = (req, res) => 
db.any('SELECT * FROM stations') //DB haku?
.then(stationListFromDb => res.send(stationListFromDb))
.catch(error => res.status(500).send(error))

/* // NO NEED TO ADD STATIONS?
const addFruit = (req, res) => {
    const fruit = req.body;
    db.one(
        'INSERT INTO fruits(type, name) VALUES($1, $2) RETURNING id',
        [fruit.type, fruit.name]
    ).then(result => {
        res.send({
            id: result.id,
            type: fruit.type,
            name: fruit.name,
        });
    })
}


const delFruit = (req, res) => {
    const id = req.params.id;
    db.result('DELETE FROM fruits WHERE id = $1', [id])
        .then(result => {
            if(result.rowCount > 0) {
                res.send("OK");
            } else { 
                res.status(404).send("Not found!")
            }
        })
        .catch(error => res.status(500).send(error))
}

const fruitsList = [
    {"id": 1, "type": "apple", "name": "McIntosh"},
    {"id": 2, "type": "pear", "name": "Concorde"},
    {"id": 3, "type": "apple", "name": "Golden Delicious"},
    {"id": 4, "type": "pear", "name": "Bosc"},
    {"id": 5, "type": "orange", "name": "Valencia"},
    {"id": 6, "type": "apple", "name": "Granny Smith"},
    {"id": 7, "type": "orange", "name": "Hamlin"}
];
*/

// vanhat feikki DB:t!

/* const getFruits = (req, res) =>
    res.send(fruitsList); */

/*
const addFruit = (req, res) => {
    const fruit = req.body;
    fruit.id = (fruitsList.slice(-1)[0] || {id: 0}).id + 1;
    fruitsList.push(fruit);
    res.send(fruit);
}
*/

/*
const delFruit = (req, res) => {
    const id = req.params.id;
    // console.log("ID ", typeof id, typeof fruitsList[0].id);
    const index = fruitsList.findIndex(fruit => fruit.id === parseInt(id));
    if(index > -1) {
        const deletedFruit = fruitsList.splice(index, 1);
        res.send(deletedFruit);
    } else {
        res.status(404).send('Not found');
    }
}
*/

    module.exports = {
        getStations
    };