import {
    AllProfileReadService,
    DeleteSingleUserService,
    profileUpdateService,
    singleProfileReadService
} from "../services/ProfileServices.js";


export const singleProfileRead = async (req, res) => {
    let result = await singleProfileReadService(req);
    return res.json(result);
}


export const AllProfileRead = async (req, res) => {
    let result = await AllProfileReadService(req);
    return res.json(result);
}

export const profileUpdate = async (req, res) => {
    let result = await profileUpdateService(req);
    return res.json(result);
}


export const profileDelete = async (req, res) => {
    let result = await DeleteSingleUserService(req);
    return res.json(result);
}