import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const handleLogin = async (req, res) => {
  try {
    //below code is working , till here everything is working
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "missing fields",
      });
    }

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({
        msg: "please register",
      });
    }

    const passwordMatched = await bcrypt.compare(password, userExists.password);

    if (!passwordMatched) {
      return res.status(400).json({
        msg: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: userExists._id,
        username: userExists.username,
      },
      process.env.JWT_SECRET_KEY
    );

    return res.status(200).json({
      msg: "successfull",
      token,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const handleRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        msg: "missing fields",
      });
    }

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      return res.status(400).json({
        msg: "user already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      msg: "registered successfully",
      user: user,
    });
  } catch (error) {
    console.log("handleRegister error -> ", error);
    return res.status(500).json({
      msg: "server error",
    });
  }
};
