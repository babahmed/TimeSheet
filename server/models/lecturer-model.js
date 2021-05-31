const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lecturer = new Schema(
    {
        name: { type: String, required: true },
        institutionId: { type: Number, required: true },
        time: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('lecturer', Lecturer)