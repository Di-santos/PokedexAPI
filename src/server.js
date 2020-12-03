// Imports no Express e Instanciação do App
const express= require('express')
const app = express()

// Imports nas Rotas
const pokedex = require('./routes/pokedex');
const regions = require('./routes/regions');


// Compatibilidade JSON e uso das rotas
app.use(express.json())
app.use('/pokedex', pokedex);
app.use('/regions', regions);


// Porta 3000
app.listen(3000, ()=>{
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n +++ Server Online +++ \n\n\n')
})