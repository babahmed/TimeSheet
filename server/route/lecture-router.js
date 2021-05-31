const Lecture = require('../models/lecture-model')

createLecture = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a lecture',
        })
    }

    const lecture = new Lecture(body)

    if (!lecture) {
        return res.status(400).json({ success: false, error: err })
    }

    lecture
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: lecture._id,
                message: 'Lecture created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Lecture not created!',
            })
        })
}

updateLecture = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Lecture.findOne({ _id: req.params.id }, (err, lecture) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Lecture not found!',
            })
        }
        lecture.name = body.name
        lecture.title = body.title
        lecture.institutionId = body.institutionId
        lecture
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: lecture._id,
                    message: 'Lecture updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Lecture not updated!',
                })
            })
    })
}

deleteLecture = async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, lecture) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Lecture not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getLectureById = async (req, res) => {
    await Lecture.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Lecture not found` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getLectures = async (req, res) => {
    await Lecture.find({}, (err, lecture) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!lecture.length) {
            return res
                .status(404)
                .json({ success: false, error: `Lecture not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createLecture,
    updateLecture,
    deleteLecture,
    getLectures,
    getLectureById,
}
