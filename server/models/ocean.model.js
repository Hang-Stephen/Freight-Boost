const mongoose = require('mongoose');

const OceanSchema = new mongoose.Schema ({
    mbl: {
        type: String,
        required: [true, "A MBL is required."],
        minlength: [8, "The MBL must be atleast 8 characters long."],
        maxlength: [12, "The MBL may not exceed 12 characters."]
    },
    hbl: {
        type: String,
        required: [true, "A HBL is required."],
        minlength: [8, "The HBL must be atleast 8 chracters long."]
    },
    consignee: {
        type: String,
        required: [true, "A consignee is required."],
        minlength: [3, "The consignee's name must be at least 3 characters."]
    },
    shipper: {
        type: String,
        required: [true, "A shipper is required."],
        minlength: [3, "The shipper's name must be at least 3 characters."]
    },
    portOfLoading: {
        type: String,
        required: [true, "A port of loading is required."],
        minlength: [3, "The port of loading must be at least 3 characters long."]
    },
    portOfDischarge: {
        type: String,
        required: [true, "A port of discharge is required."],
        minlength: [3, "The port of discharge must be at least 3 characters long"]
    },
    etd: {
        type: String,
        required: [true, "An estimated date of departure is required."]
    },
    eta: {
        type: String,
        required: [true, "An estimated date of arrival is required."]
    }
}, {timestamps: true});

const Ocean = mongoose.model('Ocean', OceanSchema);
module.exports = Ocean;