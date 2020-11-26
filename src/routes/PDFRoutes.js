const express = require("express")
const routes = express.Router()

const PdfController = require("../controllers/PdfController")

routes.get("/pdf/:id",PdfController.gerarPDF)

module.exports = routes