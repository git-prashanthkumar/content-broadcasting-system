import pool from "../models/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register=async(req,res)=>{
    const {name, email, password, role}=req.body;
    const hashed=await bcrypt.hash(password,10); //hashing the password for 10 rounds

    const result=await pool.query("INSERT INTO users(name,email,password_hash,role) VALUES($1,$2,$3,$4) RETURNING *",[name, email, hashed, role]);

    res.json(result.rows[0]);

};

export const login=async(req,res)=>{
    const {email ,password}=req.body;
    
    const user=await pool.query("select * from users where email=$1",[email]);

    if(user.row.length==0){
        return res.status(400).json("user not found");
    }

    const valid=await bcrypt.compare(password, user.rows[0].passwor_hash);

    if(!valid){
        return res.status(400).json("Invalid Password");
    }

    const token=jwt.sign(
        {
            id:user.rows[0].id,
            role: user.rows[0].role
        }, process.env.JWT_SECRET
    );

    return res.json({token});
};