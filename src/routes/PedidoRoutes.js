const express = require("express")
const routes = express.Router()

const PedidoController = require("../controllers/PedidoController")

routes.post("/pedido",PedidoController.create)
routes.delete("/pedido/:id",PedidoController.delete)
routes.get("/soma-total-pedidos-recebidos",PedidoController.soma)

module.exports = routes