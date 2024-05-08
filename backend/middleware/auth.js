// provide a token authentication middleware 
import jwt from 'jsonwebtoken'
//the middleware so first we will take the token from the users using the headers 
//the mw will convert the token 

const authMiddleware = async (req, res, next) =>{
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false, message:"Not authorized Login Again"}); 
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }
}
export default authMiddleware;
