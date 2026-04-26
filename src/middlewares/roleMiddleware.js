const roleMiddleware=(role)=>{
    return(req,res,next)=>{
        if(req.user.role!=role){
            return res.state(403).json("access denied");

        }
        next();
    };
};

export default roleMiddleware;