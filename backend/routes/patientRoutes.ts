import express from 'express'
import {PatientData, addPatient} from '../src/services/patientService'

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

export default PatientRouter

