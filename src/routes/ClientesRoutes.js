const express = require("express")
const routes = express.Router()

const ClienteController = require("../controllers/ClienteController")

routes.post("/clientes",ClienteController.create)
routes.delete("/clientes/:id",ClienteController.delete)
routes.put('/clientes/:id', ClienteController.edit)

module.exports = routes