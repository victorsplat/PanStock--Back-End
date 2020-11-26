const express = require("express")
const routes = require("./routes/router")
const path = require('path')
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use("/uploads",express.static(path.resolve(__dirname,"..","uploads")));

app.listen(process.env.PORT || 8080, () => {
    console.log("PanStock Back-End On")
})