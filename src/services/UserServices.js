import UserModel from "../model/UserModel.js";
import {EncodeToken} from "../utility/TokenUtility.js";

export const RegistrationService = async (req)=>{
    try {
        const reqBody = req.body;
        const data = await UserModel.create(reqBody)
        return {statusCode: "success", data: data}
    }
    catch(error){
        return {statusCode: "error", error: error.toString()};
    }

}

export const loginService = async (req)=>{
    try{
        let email=req.params.email;
        let total=await UserModel.find({email: email}).countDocuments();

        if(total===1){
            let user_id=await UserModel.find({email:email}).select('_id');
            let token=EncodeToken(email,user_id[0]['_id'].toString())
            return {status:"success",token:token,total:total}
        }
        else{
            return {status:"fail",total:total}
        }
    }
    catch(error){
        return {status: "error", error: error.toString()};
    }
}










