import patientData from "../backend/database/patients.json"
/* import { PublicPatient } from "./types/types" */

export function getPatient(): any{

    const final = patientData.find(person => person.id === "d2773336-f723-11e9-8f0b-362b9e155667")
    console.log({...final, entries: []})
}

getPatient()