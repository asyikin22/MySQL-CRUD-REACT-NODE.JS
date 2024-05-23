import express from "express"
import mysql from "mysql"
import dotenv from 'dotenv';
dotenv.config();              //load environment variables

const app = express()

//Create connection to MySQL DB
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//send a response to the browser

app.get("/", (req, res) => {{
    res.json("Hello this is the backend libray 👋")
}})

//Express MW to parse JSON requst bodies
app.use(express.json())

//Fetch data from MySQL DB
app.get("/books", (req, res) => {
    const q = "SELECT * FROM library"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    } )
})

//create new data
app.post("/books", (req, res) => {
    const q = "INSERT INTO library (`title`, `description`, `genre`, `cover`) VALUES (?, ?, ?, ?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.genre,
        req.body.cover,
    ]

    db.query (q, values, (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been added!")
    })
})

app.listen(3000, () => {
    console.log("connected to backend!")
})