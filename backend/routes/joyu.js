
const express = require("express");
const joyu = express.Router();
const schema = require("../model/schemas");
const mongoose = require("mongoose");
const joyuSchemas = require("../model/joyuschema");
const nodemailer = require('nodemailer');

joyu.get("/joyu/customer", async (req, res) => {
    const JoyuUser = joyuSchemas.JoyuUser;
    try {
      const userData = await JoyuUser.find();
      const emails = userData.map(user => user.email);
    console.log(emails);
      res.json(userData);
    } catch (err) {
      res.status(500).json({
        message: "User not found",
        error: err.message,
      });
    }
  });

joyu.post("/joyu/customer", async(req, res, next) => {
    const { email } = req.body;
    try {
      const saveUser = await joyuSchemas.JoyuUser.create({
        email,
      });
      res.status(200).json({
        message: "User added successfully",
        data: saveUser,
      });
    } catch (err) {
      res.status(500).json({
        message: "User not added",
        error: err.message,
      });
    }
  });

joyu.post("/joyu/sendemail", async (req, res) =>{
  const JoyuUser = joyuSchemas.JoyuUser;
  const emailData = req.body; // Assuming req.body contains the data to send
  try {
    const userData = await JoyuUser.find();
    const emails = userData.map(user => user.email);
    console.log(emails);

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'domaihuong.28.12.20@gmail.com', // Replace with your email
        pass: 'ltbk kpqm opqb bkpw', // Replace with your email password
      },
    });

    // Send emails to all users
    for (const email of emails) {
      const mailOptions = {
        from: '"Your Name" <your-email@example.com>', // Sender address
        to: email, // List of receivers
        subject: 'Subject of your email', // Subject line
        text: `Plain text version of the message: ${JSON.stringify(emailData)}`, // Plain text body
        html: `<p>HTML version of the message: ${JSON.stringify(emailData)}</p>`, // HTML body
      };

      await transporter.sendMail(mailOptions);
    }

    res.json(userData);
  } catch (err) {
    res.status(500).json({
      message: "User not found",
      error: err.message,
    });
  }
})

module.exports = joyu;