const { Console } = require("console");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(cors(
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials:true
));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));



const db = mysql.createConnection({                ////这里可能要改
    user: "root",
    host: "localhost"
    password: "password"
    database: "vacationHacker"
});

//route for register
app.post('/register',(req,res)=> {
    //get data pass from frontend
    const userID = req.body.userID
    const password = req.body.password
    //input new records
    db.query(
        "INSERT INTO users (userID, password) VALUES (?,?)", 
        [userID, password], 
        (err, result)=> {
            console.log(err);
        }
    );
});

//route for log in
app.post('/login', (req,res)=> {
    //get data pass from frontend
    const userID = req.body.userID
    const password = req.body.password
    //input new records
    db.query(
        "SELECT * FROM users WHERE userID = ? AND password = ?", 
        [userID, password], 
        (err, result)=> {
            if (err) {
                res.send({err:err})
            } 
            // Send result back to front-end
            if (result.length > 0) {
                req.session.user = result
                res.send(result)
            } else {
                res.send({message: "Wrong userID/password combination! Try again! "})
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running server");
})