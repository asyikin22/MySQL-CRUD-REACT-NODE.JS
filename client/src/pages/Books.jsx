import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async ()=> {
      try {
        const res = await axios.get("http://localhost:3000/books")
        setBooks(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllBooks()
  }, [])

  return (
    <div>
      <h1 className='bg-blue-400 text-white'>My Library</h1>
      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.genre}</p>
            <span>{book.price}</span>
            </div>
        ))}
      </div>

      <button><Link to="/insert">Add New Book</Link></button>
    </div>
  )
}

export default Books
