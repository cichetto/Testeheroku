const express = require('express')

const mongoose = require('mongoose')

const app = express()

const Student = require('./models/Student')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const studentRoutes = require ('./routes/studentRoutes')

app.use('/student', studentRoutes)



app.get('/', (req, res) => {
    res.json({ message: 'Ola ! Ola ! Express !!!'})
})


mongoose
    .connect(
        'mongodb+srv://cichetto:2022@cluster0.cf7q4ia.mongodb.net/?retryWrites=true&w=majority' ,
    )
    .then(() => { 
        console.log('Conectamos ao MongoDB !!!')
        app.listen(3000)
    })
    .catch((err) => console.log('ERRO !!'))

    