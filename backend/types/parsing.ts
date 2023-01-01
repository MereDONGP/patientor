import { Gender } from "./types";


const isString = (text:unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
}

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param)
}


export const parseStrings = (name: unknown) : string => {
    if(!name || !isString(name)){
        throw new Error("this is not correct string")
    }
    
    return name
}

export const parseGender = (gender: unknown): Gender => {
    if(!gender || !isGender(gender)){
        throw new Error("this is not correct string")
    }

    return gender
}