import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // Check User
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);

    if (data.length > 0) {
      return res.status(409).json("User Already Registered.");
    }

    const q = "INSERT INTO users (`username`, `email`, `password`) VALUES(?)";
    const values = [req.body.username, req.body.email, req.body.password];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json("User registered Successfully!");
    });
  });
};
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);

    if (data.length === 0) {
      return res.status(500).json("User Data not found!");
    }

    const isPasswordCorrect = req.body.password === data[0].password;
    if (!isPasswordCorrect) {
      return res.status(400).json("User Email or Password Incorrect");
    }

    const token = jwt.sign({ id: data[0].id }, "jwtToken");

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json("User Login Successfully.");
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User Logged out Successfully.");
};
