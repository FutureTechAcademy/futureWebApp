const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./router")

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 4000
const dbLink = "mongodb+srv://admin:admin@app1.ipdohtv.mongodb.net/futuretech?retryWrites=true&w=majority&appName=App1"


mongoose.connect(dbLink).then(() => {

  app.use(router)

  app.listen(PORT, () => {
    console.log("Database Connected Server Started PORT : ", PORT)
  })
}).catch((err) => {
  console.log(err)
})
