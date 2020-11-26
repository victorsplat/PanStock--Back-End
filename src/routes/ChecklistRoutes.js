const express = require("express")
const routes = express.Router()

const CheckListController = require("../controllers/CheckListController")

routes.get("/check-list",CheckListController.index)
routes.post("/check-list",CheckListController.create)
routes.delete("/check-list/:id",CheckListController.delete)
routes.put("/check-list/:id",CheckListController.edit)

module.exports = routes