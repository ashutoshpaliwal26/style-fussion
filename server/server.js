import app from "./app.js";
import {configDotenv} from 'dotenv';
import dbConnecion from "./config/db.js";

configDotenv();

dbConnecion();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`);
})