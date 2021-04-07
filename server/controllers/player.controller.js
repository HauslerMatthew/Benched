const { Player } = require('../models/player.model');

module.exports.findAllPlayers = (req, res) => {
    Player.find({})
        .then(allPlayers => {
            console.log("finding all players...")
            res.json({ results: allPlayers });
        })
        .catch(err => res.json(err));
};

module.exports.createPlayer = (req, res) => {
    const { name, position, game1, game2, game3 } = req.body;
    Player.create({
        name,
        position,
        status: {
            game1,
            game2,
            game3
        }
    })
        .then(player => {
            res.json(player);
            console.log("created a new player");
            console.log(player)
        })
        .catch(err => res.json(err))
};

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(player => {
            res.json(player);
            console.log("player found!")
        })
        .catch(err => res.json(err));
};

module.exports.updatePlayer = (req, res) => {
    Player.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPlayer => {
            res.json(updatedPlayer);
            console.log("player updated!")
        })
        .catch(err => res.json(err))
};

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => {
            res.json(deleteConfirmation);
            console.log("player deleted!")
        })
        .catch(err => res.json(err));
};