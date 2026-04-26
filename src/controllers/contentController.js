import pool from "../models/db.js";

export const uploadContent=async(req,res)=>{
    const {title, subject, start_time, end_time}=req.body;

    const file=req.file;

    const result=await pool.query(`insert into content(title, subject, file_path, uploaded_by, status, start_time, end_time) values($1, $2, $3, $4, $5, $6, $7) returning *`,[title,subject,
        file.path,req.user.id,"pending",start_time,end_time,
    ]);

    res.json(result.rows[0]);
}

export const approveContent= async(req,res)=>{
    const{id}=req.params;
    await pool.query("update content set status='approved' where id=$1",[id]);

    res.json("Approved");
};

export const rejectContent=async(req,res)=>{
    const{id}=req.params;
    const{reason}=req.body;

    await pool.query("update content set status='rejected', rejection_reason=$1 where id=$2",[reason,id]);

    res.json("Rejection");
};

