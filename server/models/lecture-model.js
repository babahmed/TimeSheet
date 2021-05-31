const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lecture = new Schema(
    {
        name: { type: String, required: true },
        title: { type: String, required: false },
        institutionId: { type: Number, required: true },
        time: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('lecture', )