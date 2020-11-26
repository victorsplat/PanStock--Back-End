const express = require("express")
const routes = express.Router()
const ResultadoEsperado = require("../services/resultado_esperado")

routes.get('/resultado-esperado', ResultadoEsperado.grh)

module.exports = routes