const express = require("express")
const routes = express.Router()

const EmpresaController = require("../controllers/EmpresaController")

routes.get("/empresas",EmpresaController.index)
routes.post("/empresas",EmpresaController.create)
routes.delete("/empresas",EmpresaController.delete)

module.exports = routes