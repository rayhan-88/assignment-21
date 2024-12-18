
import UserModel from "../model/UserModel.js";


export const singleProfileReadService = async (req)=>{
try {
    let user_id=req.headers.user_id;
    let result= await UserModel.find({_id:user_id})
    return {status:"success", data:result}
}
catch(err){
    return {statusCode: "error", error: err.toString()};
}
}
export const AllProfileReadService = async (req)=>{
    try {

        let result= await UserModel.find()
        return {status:"success", data:result}
    }
    catch(err){
        return {status: "error", error: err.toString()};
    }
}

export const profileUpdateService = async (req)=>{
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        let data =await UserModel.updateOne({_id:user_id},{$set:reqBody},{upsert:true})
        return {status:"success", message:"User update Success",data:data}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong",error: e.toString()};
    }
}


export const DeleteSingleUserService = async (req)=>{
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        let data =await UserModel.deleteOne({_id:user_id})
        return {status:"success", message:"User update Success",data:data}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong",error: e.toString()};
    }
}





