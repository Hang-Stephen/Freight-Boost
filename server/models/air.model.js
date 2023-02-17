const mongoose = require('mongoose');

const AirSchema = new mongoose.Schema({
    mawb: {
        type: String,
        required: [true, "A MAWB is required."],
        minlength: [11, "The MAWB should be 11 characters."],
        maxlength: [13, "The MAWB may not exceed 13 characters."]
    },
    hawb: {
        type: String,
        required: [true, "A HAWB is required."],
        minlength: [6, "The HAWB should be at least 6 characters long."]
    },
    consignee: {
        type: String,
        required: [true, "A consignee is required."],
        minlength: [3, "The consignee's name must be at least 3 characters long."]
    },
    shipper: {
        type: String,
        required: [true, "A shipper is required."],
        minlength: [3, "The shipper's name must be at least 3 characters long."]
    },
    airportOfDeparture: {
        type: String,
        required: [true, "An airport of depature is required."],
        minlength: [3, "The airport code must be atleast 3 characters."],
        maxlength: [3, "The airport code may not exceed 3 characters."]
    },
    airportOfArrival: {
        type: String,
        required: [true, "An airport of arrival is required."],
        minlength: [3, "The airport code must be atleast 3 characters."],
        maxlength: [3, "The airport code may not exceed 3 characters."]
    },
    etd: {
        type: String,
        required: [true, "An estimated departure date is required."]
    },
    eta: {
        type: String,
        required: [true, "An estimated arrival date is required."]
    }
}, {timestamps: true});

const Air = mongoose.model('Air', AirSchema);
module.exports = Air;