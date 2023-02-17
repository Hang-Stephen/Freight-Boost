const Ocean = require('../models/ocean.model');

module.exports.createOceanShipment = (request, response) => {
    Ocean.create(request.body)
    .then(newOceanShipment => response.json(newOceanShipment))
    .catch(err => response.status(400).json({message: "An error has occured", error: err}));
}

module.exports.findAllOceanShipments = (request, response) => {
    Ocean.find({})
    .then((allOceanShipments) => response.json(allOceanShipments))
    .catch((err) => response.status(400).json(err))
}

module.exports.findOneOceanShipment = (request, response) => {
    Ocean.findOne({_id: request.params.id})
    .then((oneOceanShipment) => {
        console.log(oneOceanShipment)
        response.json(oneOceanShipment);
    })
}

module.exports.findOneAndUpdate = (request, response) => {
    Ocean.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
    .then(updatedOceanShipment => response.json(updatedOceanShipment))
    .catch((err) => response.status(400).json({message: "An error has occured.", error: err}))
}

module.exports.deleteOceanShipment = (request, response) => {
    Ocean.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch((err) => console.log(err))
}

