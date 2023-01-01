import patientData from "../../database/patients.json"
import { ExcludeSSN, Fields, NewPatient} from "../../types/types"
import patients from '../../database/patients.json'
import { parseStrings, parseGender } from "../../types/parsing"

export function PatientData(): ExcludeSSN [] {
    const final = patientData.map(({id, name, dateOfBirth, ssn, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    }))

    return final

}
export function addPatient({name, dateOfBirth, ssn, gender, occupation}: Fields): NewPatient{
    const newEntry =  {
        id:  "testing",
        name: parseStrings(name),
        dateOfBirth: parseStrings(dateOfBirth),
        ssn: parseStrings(ssn),
        gender: parseGender(gender),
        occupation: parseStrings(occupation)
    }
    patients.push(newEntry)
    return newEntry
}