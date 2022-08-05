const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const pokemon = require('./models/pokemon')
const app = express()
const port = 3000



mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});



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
    //http here makes port show up as hyperlink
    console.log(`Listening on http://localhost:${port}`)
})

