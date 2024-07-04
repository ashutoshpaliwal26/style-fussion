import express from 'express';
import cors from 'cors';
import signup from './routes/signup.js'

const app = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api/signup", signup);

app.post("/", (req,res)=>{
  const {name} = req.body;

  console.log(name);

  res.json({
      name : name
  })
})




export default app;