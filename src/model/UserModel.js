import mongoose from 'mongoose';
const DataSchema = new mongoose.Schema({
    firstName:{type:String,required: true},
    lastName:{type:String,required: true},
    NIDNumber:{type:String,required: true},
    phoneNumber:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true,lowercase:true},
    bloodGroup:{type:String,required:true}
},{timestamps:true,versionKey:false,});
const UserModel = mongoose.model('users', DataSchema);
export default UserModel;
