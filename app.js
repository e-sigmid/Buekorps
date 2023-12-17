const express = require("express")
const path = require("path");
const db = require("better-sqlite3")("database.db", {verbose: console.log} )
const bcrypt = require("bcrypt") //crypterer passord
const bodyParser = require("body-parser") //basically sier hva som er i bodyen

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.post("/register", (req, res) => {
    const insertStatement = db.prepare("INSERT INTO userss (name, email, password_hash, role, organisasjon) VALUES (?, ?, ?, ?, ?)");
//    const hash = bcrypt.hashSync(req.body.password, 10)
    const inSTMT = insertStatement.run(req.body.name, req.body.email, req.body.password_hash, req.body.role, req.body.organisasjon);
    if(inSTMT){
        res.send("User addet jippi");
    }else{
        res.send("nope")
    }
});





app.use(express.static(path.join(__dirname, "public")));

app.listen(3001, () => {
    console.log("Server is running on port http://localhost:3001");
})