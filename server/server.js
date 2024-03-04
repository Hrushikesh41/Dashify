const express = require("express")
const env = require("dotenv")

const app = express();
app.use(express.json());

env.config({path : "config.env"});

const port = process.env.PORT;

app.get("/", (req, res)=>{
    res.get("Hello Users")
})

app.listen(port, ()=>{
    console.log("APP LISTENING ON PORT : " + port);
})