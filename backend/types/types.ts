export interface diagnoseTypes {
    code: string,
    name: string,
    latin: string,
}

export enum Gender {
    Male = "male",
    Female = "female"
}

export interface PatientTypes {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: String,
    occupation: string,
    entries: Entry[]

}

export type  ExcludeSSN = Omit<PatientTypes, 'ssn'>

export type NewPatient = Omit<PatientTypes, 'id'>;

export type Fields = {
    id: unknown,
    name: unknown,
    dateOfBirth: unknown,
    ssn: unknown,
    gender: unknown,
    occupation: unknown

}

export interface Entry{

}


export type PublicPatient = Omit<PatientTypes, 'ssn' | 'entries'>
