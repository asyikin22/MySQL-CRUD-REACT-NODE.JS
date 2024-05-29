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
        console.log(res.data)
        setBooks(res.data)
      } catch (error) {
        console.error("error fetching books:", error)
      }
    }
    fetchAllBooks()
  }, [])

  async function handleDelete(id) {
    try {
      await axios.delete("http://localhost:3000/books/"+id)
      window.location.reload ()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className='bg-blue-400 text-white'>My Library</h1>
      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.genre}</p>
            <span>{book.author}</span>
            <button className="delete-btn" onClick={()=> handleDelete(book.id)}>Delete</button>
            <button className="update-btn"><Link to={`/update/${book.id}`} style={{ textDecoration: 'none'}}>Update</Link></button>
            </div>
        ))}
      </div>

      <button className="mt-4 bg-blue-600 text-white py-2 px-2 rounded hover:bg-blue-500">
        <Link to="/insert" style={{ textDecoration: 'none'}}>Add New Book</Link>
        </button>
    </div>
  )
}

export default Books
