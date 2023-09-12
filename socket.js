const mongoose = require("mongoose");

let dataSchema = new mongoose.Schema({
    'pname' : {
        required: true,
        type: String
    },

    'pbrand' : {
        required: true,
        type: String
    },

});

module.exports = mongoose.model("socket_js", dataSchema);