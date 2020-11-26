const express = require("express")
const routes = express.Router()
const multer = require('multer')
const multerConfig = require('../config/multer')

const ProdutoController = require("../controllers/ProdutoController")
const upload = multer(multerConfig)

routes.post("/produtos",upload.single("linkDaImagem"), ProdutoController.create)
routes.delete("/produtos/:id",ProdutoController.delete)
routes.put('/produtos/:id', ProdutoController.edit)


module.exports = routes