const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]});
});

app.get('/pokemon', (req, res) => {
   res.render('Index', {pokemon: pokemon});
});

app.get('/', (req, res) => {
   res.send('Welcome to Pokemon App!');
});

app.listen(port, () => {
    console.log('I am listening on port ', port)
})

