const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//connection with the dataBase
const { connection } = require("../config.db");

//Route for All Users
app.get("/users", (req, res) => {
    connection.query("SELECT * FROM users",
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results);
        });
});
//Route for connected users to one User
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM users JOIN connections ON users.id = users_id JOIN connected ON connected.id = connected_id WHERE users.id = ?;",
        [id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results);
        });
});

//Route for New User
app.post("/users", (req, res) => {
    const body = req.body;
    if (!body.first_name || !body.last_name) {
        res.status(400).json({ ok: false, message: "first and last names are required" });
    } else {
        connection.query("INSERT INTO users(first_name,last_name) VALUES (?,?)",
            [body.first_name, body.last_name],
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(201).json({ ok: true, user: body });
            }
        );
    }
});

//Route for New Connection
app.post("/connections", (req, res) => {
    const body = req.body;
    connection.query("INSERT INTO connections(users_id, connected_id) VALUES(?,?)",
        [body.userId, body.connectedId],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).json(results);
        });
});

module.exports = app;