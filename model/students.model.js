const mongoose = require("mongoose");

var StudentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Required",
    },
    roll: {
        type: Number,
        required: "Required",
    },
    sem: {
        type: Number,
    },
});

mongoose.model("students",StudentsSchema);
