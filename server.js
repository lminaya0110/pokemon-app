const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon')

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req,res) => {
    res.send(pokemon)
})

app.listen(port, () => {
    console.log('I am listening on port 3000')
})

