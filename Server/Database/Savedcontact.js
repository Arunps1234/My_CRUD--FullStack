const mongoose = require("mongoose")

const userConatcs = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("usercontact", userConatcs)