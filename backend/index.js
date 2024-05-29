import express from "express"
import cors from 'cors';
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

//MW to allow cross-origin requests
app.use(cors())

//Express MW to parse JSON request bodies
app.use(express.json())

//send a response to the browser
app.get("/", (req, res) => {{
    res.json("Hello this is the backend libray 👋")
}})

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
    const q = "INSERT INTO library (`title`, `description`, `genre`, `author`) VALUES (?, ?, ?, ?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.genre,
        req.body.author,
    ]

    db.query (q, values, (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been added!")
    })
})

//Delete book from database
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM library WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been removed successfully!")
    })
})

//Update book from database
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id
    const q = "UPDATE library SET `title`=?, `author`=?, `genre`=?, `description`= ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.description,
        req.body.genre,
        req.body.author,
    ]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been updated successfully!")
    })
})

app.listen(3000, () => {
    console.log("connected to backend!")
})