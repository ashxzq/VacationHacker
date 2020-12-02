const { Console } = require("console");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5000/',
    methods: ["GET","POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));



const db = mysql.createConnection({                ////这里可能要改
    user: "teamMembers@cs411team57",
    host: "cs411team57.mysql.database.azure.com",
    userPassword: "whydontwe57!",
    database: "411database"
});

//route for register
app.post('/register',(req,res)=> {
    //get data pass from frontend
    const userID = req.body.userID
    const userPassword = req.body.userPassword
    const homeAiport = req.body.homeAiport
    //input new records
    db.query(
        "INSERT INTO users (userID, userPassword, homeAiport) VALUES (?,?,?)", 
        [userID, userPassword, homeAiport], 
        (err, result)=> {
            console.log(err);
        }
    );
});

//route for log in
app.post('/login', (req,res)=> {
    //get data pass from frontend
    const userID = req.body.userID
    const userPassword = req.body.userPassword
    //input new records
    db.query(
        "SELECT * FROM users WHERE userID = ? AND userPassword = ?", 
        [userID, userPassword], 
        (err, result)=> {
            if (err) {
                res.send({err:err})
            } 
            // Send result back to front-end
            if (result.length > 0) {
                req.session.user = result
                res.send(result)
            } else {
                res.send({message: "Wrong userID/userPassword combination! Try again! "})
            }
        }
    );
});

app.listen(3306, () => {
    console.log("running server");
})