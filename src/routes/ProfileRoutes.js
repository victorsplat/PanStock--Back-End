const express = require("express")
const routes = express.Router()

const ProfileController = require("../controllers/ProfileController")

routes.get("/profile/produto",ProfileController.produtos)
routes.get("/profile/cliente",ProfileController.clientes)
routes.get("/profile/entrega",ProfileController.entrega)
routes.get("/profile/pedido",ProfileController.pedido)


module.exports = routes