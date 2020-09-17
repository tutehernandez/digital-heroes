
const express = require('express') 
const app = express()
const path = require ('path')


app.get('/', function (req, res){
 res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
})

app.get('/heroes', function (req, res){
    let file = path.resolve('heroes.json')
    res.sendFile(file)
})

app.get('/heroes/detalle/id', function (req, res){
    res.send('detalle')
})

app.get('/heroes/bio/id', function (req, res){
    res.send('bio')
})

app.get('/creditos', function (req, res){
    res.send('Página hecha por Tute Hernandez.')
})

app.get('*', function(req, res){
    res.send('Not found')
})

app.listen(3030) // http://localhost:3030/

