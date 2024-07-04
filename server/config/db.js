import mongoose from 'mongoose';

const dbConnecion = async() =>{
  try{
    await mongoose.connect(process.env.DB_STR,{
      dbName : "Style_fussion"
    });
    console.log("Connected Successfully To Data Base");
  }catch(err){
    console.log(err);
  }
}

export default dbConnecion;