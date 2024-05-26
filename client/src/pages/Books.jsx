import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("api/books")
        console.log(res.data)
        setBooks(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAllBooks

  }, [])

  return (
    <div>
      <h1>Book page</h1>
    </div>
  )
}

export default Books
