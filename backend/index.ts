import express from "express"
import PatientRouter from "./routes/patientRoutes"
var cors = require('cors')

const app =  express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/api", PatientRouter)


const PORT = 3001
app.listen(PORT, () => {
    console.log("the server is on I guess")
})