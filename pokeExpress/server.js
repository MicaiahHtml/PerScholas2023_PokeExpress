const express = require('express');
const app = express();
const pokemons = require('./models/pokemons.js');
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

// I - INDEX - dsiplays a list of all fruits
app.get('/pokemon/', (req, res) => {
    //res.send(pokemons);
    res.render('Index', {pokemons: pokemons});
});


// S - SHOW - show route displays details of an individual fruit
app.get('/pokemon/:pokemonID', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {// second parameter must be an object
        pokemon: pokemons[req.params.pokemonID]
    });
})

app.listen(3000, () => {
    console.log('listening');
});