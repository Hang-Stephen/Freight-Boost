const Air = require('../models/air.model');

module.exports.createAirShipment = (request, response) => {
    Air.create(request.body)
    .then(newAirShipment => response.json(newAirShipment))
    .catch(err => response.status(400).json({message: "An error has occured", error: err}));
}

module.exports.findAllAirShipments = (request, response) => {
    Air.find({})
    .then((allAirShipments) => response.json(allAirShipments))
    .catch((err) => response.status(400).json(err))
}

module.exports.findOneAirShipment = (request, response) => {
    Air.findOne({_id: request.params.id})
    .then((oneAirShipment) => {
        console.log(oneAirShipment);
        response.json(oneAirShipment);
    })
}

module.exports.findOneAndUpdate = (request, response) => {
    Air.findOneAndUpdate ({_id: request.params.id}, request.body, {new: true, runValidators: true})
    .then(updatedAirShipment => response.json(updatedAirShipment))
    .catch((err) => response.status(400).json({message: "An error has occured", error: err}))
}

module.exports.deleteAirShipment = (request, response) => {
    Air.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch((err) => console.log(err))
}