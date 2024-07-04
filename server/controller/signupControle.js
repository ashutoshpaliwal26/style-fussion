import { asyncErrorHandeler } from "../middleware/asyncErrorHandeler.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import {setToken} from '../utils/token.js';

export const createUser = asyncErrorHandeler(async (req, res) => {
  const { name, email, address, password } = req.body;

  const checkUser = await User.findOne({ email });

  if (checkUser) {
    res.status(200).json({
      success: false,
      message: "User Already Exist You Need To Login",
    });
  } else {
    const newUser = User({
      name,
      email,
      address,
      password: await bcrypt.hash(password, 10),
    });

    // await newUser.save();
    const token = setToken({name, email, address});
    res.cookie("uid", token);
    

    res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  }
});

