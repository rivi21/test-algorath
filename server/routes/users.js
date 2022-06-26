const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const { connection } = require("../config.db");

app.get("/users", (req, res) => {
    connection.query("SELECT * FROM users",
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results);
        });
});


app.post("/users", (req, res) => {
    const body = req.body;

    if (!body.first_name || !body.last_name) {
        res.status(400).json({ ok: false, message: "complete name is required" })
    } else {
        connection.query("INSERT INTO users(first_name,last_name) VALUES (?,?)",
            [body.first_name, body.last_name],
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(201).json({user: body});
            });
    }

});

app.post("/connections", (req, res) => {
    const body = req.body;
    console.log(body)
    connection.query("INSERT INTO connections(users_id, connected_id) VALUES(?,?)", 
    [body.userId, body.connectedId],
    (error, results) => {
        if(error) {
            throw error;
        }           
        res.status(201).json(results);       
    });
});

module.exports = app;