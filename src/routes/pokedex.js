// Import no Express e no Router para módulos de rotas
var express = require('express');
var router = express.Router();

const data = require('../database/pokedex.json')

//Listar a Pokedex na íntegra
router.get('/', function (req, res) {
    res.json(data) 
}),


// Buscar um Pokémon específico pelo Número
router.get('/:id', function (req, res) {
    const {id} = req.params
    const pokemon = data.find(pokemon => pokemon.id ==id)

    if (!pokemon) return res.status(404)

    res.json(pokemon) 
}),


router.get('/:name', function (req, res) {
    const {name} = req.params
    res.render(name)
    const pokemon = data.find(pokemon => pokemon.name.english == name)

    if (!pokemon) return res.status(404)

    res.json(pokemon) 
}),

// Export no módulo com a rota principal e suas secundárias
module.exports = router;