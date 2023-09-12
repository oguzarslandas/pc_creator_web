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

    'pprice' : {
        required: true,
        type: String
    },

    'pdesc' : {
        required: true,
        type: String
    },

    'psocket' : {
        required: true,
        type: String
    },

    'pbenchpoint' : {
        required: true,
        type: String
    },

    'pwatt' : {
        required: true,
        type: String
    },

    'presult' : {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("node_js", dataSchema);