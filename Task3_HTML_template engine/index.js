//import express, { static } from "express";

const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/weather", (req, res) => {
    res.render(`${__dirname}/public/pug/index`);
})

app.listen(8880, err => {
    if(err){
        console.log("Error. App is not working.");
    }
    console.log("Mudi's weather app is running at http://localhost:8880/weather");
})