const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");

app.get("/users", (req, res) => {   
    connection.query("SELECT * FROM users", 
    (error, results) => {
        if(error) {
            throw error;
        }           
        res.status(200).json(results);       
    });
});

/* app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    connection.query("SELECT * FROM users WHERE ", 
    (error, results) => {
        if(error) {
            throw error;
        }           
        res.status(200).json(results);       
    });
}); */


app.post("/users", (req, res) => {
    const {first_name, last_name} = req.body;
    connection.query("INSERT INTO users(first_name,last_name) VALUES (?,?)", 
    [first_name, last_name],
    (error, results) => {
        if(error){
            throw error;
        }           
        res.status(201).json({"Item añadido correctamente": results});
    });
});

module.exports = app;