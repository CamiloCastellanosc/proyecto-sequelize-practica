const express = require("express");
const cors = require("cors"); // comunicacion back y front 
const routes = require("../routes/user.routes");




const app = express();


app.use(cors);// los archivos se ven desde el back
app.use(express.json())// se ven en formato json 
app.use("/", require("../routes/user.routes"));
app.use("/", require("../routes/company.routes"));





module.exports = app;