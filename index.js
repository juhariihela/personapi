require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Phone = require('./models/phone')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
var loggerFormat = ':method :url :status :res[content-length] - :response-time ms :body';
app.use(morgan(loggerFormat))

/*const formatPhone = (phone) => {
    return {
        name: phone.name,
        phone: phone.phone,
        id: phone.id
    }
}*/

app.get('/api/', (request, response, next) => {
    res.send('<h1>Phones API!</h1>')
})

app.get('/api/persons', (request, response, next) => {
    Phone
        .find({})
        .then(phones => {
            response.json(phones.map(phone => phone.toJSON()))
        })
        .catch(error => {
            console.log(error)
            response.status(404).end()
        })
})

app.get('/api/persons/:id', (request, response, next) => {
    Phone
        .findById(request.params.id)
        .then(phone => {
            if (phone) {
                response.json(phone.toJSON())
            } else {
                response.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({ error: "malformatted id" })
        })
})

app.delete('/api/persons/:id', (request, response, next) => {
    Phone
        .findOneAndRemove({ _id: request.params.id })
        .then(result => {
            response.status(204).end()
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({ error: "malformatted id" })
        })
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (body.name === undefined || body.phone === undefined) {
        return response.status(400).json({error: 'name or phone missing'})
    }

    // tarkista onko olemassa jo
    Phone
        .findOne({ name: body.name })
        .then(phone => {
            if (phone) {
                return response.status(409).json({ error: 'name must be unique' })
            } else {
                // ei loydy, joten voidaan luoda uusi
                const phone = new Phone({
                    name: body.name,
                    phone: body.phone
                })
                console.log(phone)

                phone
                    .save()
                    .then(savedPhone => {
                        response.json(savedPhone.toJSON())
                    })
                    .catch(error => next(error))
            }
        })
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    if (body.name === undefined || body.phone === undefined) {
        return response.status(400).json({ error: 'name or phone missing' })
    }

    const phone = {
        name: body.name,
        phone: body.phone
    }
    console.log(phone)

    Phone
        .findOneAndUpdate({ _id: request.params.id }, phone, { new: true })
        .then(formattedPhone => {
            response.json(formattedPhone.toJSON())
        })
        .catch(error => next(error))
})

const unknowEndpoint = (request, response) => {
    response.status(404).send({error: 'unknow endpoint'})
}

app.use(unknowEndpoint)

const errorHandler = (error, request, response, next) => {
    console.log('errorName', error.name)
    console.log('errorMessage', error.message)

    if (error.name === "CastError" && error.kind == "ObjectId") {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === "ValidationError") {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
