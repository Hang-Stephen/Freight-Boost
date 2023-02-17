const OceanController = require('../controllers/ocean.controller');

module.exports = (app) => {
    app.post('/api/oceanfreight/new', OceanController.createOceanShipment);
    app.get('/api/oceanfreight', OceanController.findAllOceanShipments);
    app.get('/api/oceanfreight/:id', OceanController.findOneOceanShipment);
    app.put('/api/oceanfreight/edit/:id', OceanController.findOneAndUpdate);
    app.delete('/api/oceanfreight/:id', OceanController.deleteOceanShipment);
}