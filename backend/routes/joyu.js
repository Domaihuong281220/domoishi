
const express = require("express");
const joyu = express.Router();
const schema = require("../model/schemas");
const mongoose = require("mongoose");
const joyuSchemas = require("../model/joyuschema");

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

joyu.post("joyu/sendemail", async (req, res) =>{

})

module.exports = joyu;