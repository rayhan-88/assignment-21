import jwt from 'jsonwebtoken';

export const EncodeToken=(email,user_id)=>{
    let KEY="123-ABC-XYZ";
    let EXPIRE={expiresIn: '24h'}
    let PAYLOAD={email:email, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

export const DecodeToken=(token)=>{
    try {
        let KEY="123-ABC-XYZ";
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}