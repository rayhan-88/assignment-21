import {loginService, RegistrationService} from "../services/UserServices.js";

export const Registration = async (req, res) => {
    let result = await RegistrationService(req);
    return res.json(result);
}

export const login  = async (req, res) => {
    let result = await loginService(req);
    if(result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else {
        return res.status(200).json(result)
    }

}













