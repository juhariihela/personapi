const mongoose = require('mongoose')

// korvaa url oman tietokantasi urlilla. ethän laita salasanaa Gothubiin!
//const url = 'mongodb://fullstack:sekred@ds211088.mlab.com:11088/fullstack-notes'
const url = 'mongodb+srv://appuser:Habadii874Rutii@cluster0-rakwv.mongodb.net/test'

mongoose.connect(url, { useNewUrlParser: true })

const Phone = mongoose.model('Phone', {
    name: String,
    phone: String
})

const phone = new Phone({
    name: "Kalle Kapanen",
    phone: "1112223"
})

phone
    .save()
    .then(response => {
        console.log('phone saved!')
        mongoose.connection.close()
    })
