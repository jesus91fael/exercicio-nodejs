const express = require('express')
const app = express()

const data = new Date().toLocaleDateString('pt-BR')

const temper = express('https://api.hgbrasil.com/weather?woeid=455823')


let valor = temper.temp

const temperatur = (valor-32)*5/9
const temperatur1 = temperatur.toFixed(2)

const dados = [
    {
        "date" : data,
        "temperatura": temperatur1
    }
]

app.get('/', function(req, res){
    res.send(dados)
})

app.listen(3000)