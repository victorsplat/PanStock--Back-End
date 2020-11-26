const express = require("express")

const ServicesRoutes = require("./ServicesRoutes")
const EmpresasRoutes = require("./EmpresasRoutes")
const CheckListRoutes = require("./ChecklistRoutes")
const ClientesRoutes = require("./ClientesRoutes")
const ProdutosRoutes = require("./ProdutosRoutes")
const PedidoRoutes = require("./PedidoRoutes")
const EntregaRoutes = require("./EntregaRoutes")
const LoginRoutes = require("./LoginRoutes")
const ProfileRoutes = require("./ProfileRoutes")
const PDFRoutes = require("./PDFRoutes")

const routes = express.Router()

routes.use(ServicesRoutes)
routes.use(EmpresasRoutes)
routes.use(CheckListRoutes)
routes.use(ClientesRoutes)
routes.use(ProdutosRoutes)
routes.use(PedidoRoutes)
routes.use(EntregaRoutes)
routes.use(LoginRoutes)
routes.use(ProfileRoutes)
routes.use(PDFRoutes)

module.exports = routes 