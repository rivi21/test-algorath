require("./config/config");

const express = require("express");
const app = express();

app.use(express.json());
/* app.use(express.urlencoded({extended: true})); */

app.use(require('./routes/users'));

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
});

module.exports = app;