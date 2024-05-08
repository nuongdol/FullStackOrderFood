import mongoose from "mongoose";

export const connectDB = async ()=>{
    // await mongoose.connect('mongodb+srv://nuongdol:123456nuong@atlascluster.prtf9ky.mongodb.net/food-del')
    await mongoose.connect('mongodb+srv://nuongdol:123456nuong@cluster0.mmsrvbx.mongodb.net/?')
    .then(()=>console.log("DB connected"));
}