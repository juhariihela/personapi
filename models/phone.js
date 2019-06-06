const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose
    .connect(url, { useNewUrlParser: true, useFindAndModify: false })
    .then(result => {
        console.log('MongoDB yhteys auki')
    })
    .catch((error) => {
        console.log('MongoDB open error:', error.message)
    })

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    phone: {
        type: String,
        minlength: 8,
        required: true
    }
})

phoneSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Phone = mongoose.model('Phone', phoneSchema)

module.exports = Phone