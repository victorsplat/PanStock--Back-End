const express = require("express")
const routes = express.Router()

const LoginController = require("../controllers/LoginController")

routes.post("/login",LoginController.login)
routes.post("/login-dono",LoginController.loginDono)

module.exports = routes