import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://hilloldas2002.mongodb.net/Food').then(()=>console.log("DB Connected"));
}