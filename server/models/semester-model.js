const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Semester = new Schema(
    {
        name: { type: String, required: true },
        title: { type: String, required: false },
        institutionId: { type: Number, required: true },
        startTime: { type: [String], required: true },
        endTime: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('semester', Semester)