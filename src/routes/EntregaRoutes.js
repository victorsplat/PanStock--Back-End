const express = require("express")
const routes = express.Router()

const EntregaController = require("../controllers/EntregaController")

routes.post("/entrega",EntregaController.create)
routes.delete("/entrega/:id",EntregaController.delete)
routes.put('/entrega/:id', EntregaController.edit)

module.exports = routes