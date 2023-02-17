const AirController = require('../controllers/air.controller');

module.exports = (app) => {
    app.post('/api/airfreight/create/new', AirController.createAirShipment);
    app.get('/api/airfreight', AirController.findAllAirShipments);
    app.get('/api/airfreight/:id', AirController.findOneAirShipment);
    app.put('/api/airfreight/edit/:id', AirController.findOneAndUpdate);
    app.delete('/api/airfreight/:id', AirController.deleteAirShipment);
}