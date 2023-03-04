import express from 'express'
import {PatientData, addPatient, getPatient} from '../src/services/patientService'

const PatientRouter  = express.Router()

PatientRouter.get("/ping", (_req, res) => {
    res.json({hello : "hellos"})
})

PatientRouter.get("/patients", (_req, res) => {
    res.json(PatientData())
})

PatientRouter.post("/patients", (_req, res) => {
    const addingPatient = addPatient(_req.body)

    res.json(addingPatient)
})

PatientRouter.get("/:id", (_req, res) => {
    const params = _req.params.id
    res.json(getPatient(params))

})

export default PatientRouter

