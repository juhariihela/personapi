const mongoose = require('mongoose')

const url = 'mongodb+srv://appuser:Habadii874Rutii@cluster0-rakwv.mongodb.net/test?retryWrites=true'

mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false })

const Phone = mongoose.model('Phone', {
    name: String,
    phone: String
})

module.exports = Phone