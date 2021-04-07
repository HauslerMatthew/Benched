const playerController = require('../controllers/player.controller');

module.exports = (app) => {
    app.get('/api/player', playerController.findAllPlayers);
    app.post('/api/player', playerController.createPlayer);
    app.get('/api/player/:id', playerController.findOnePlayer);
    app.put('/api/player/:id', playerController.updatePlayer);
    app.delete('/api/player/:id', playerController.deletePlayer);
};

