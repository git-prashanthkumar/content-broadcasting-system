import jwt from "jsonwebtoken";

//server verifying token

const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization;

    if(!token){
        return res.status(401).json("No token");

    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;

    next();
};

export default authMiddleware;