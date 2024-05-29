import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

const Update = () => {

  const [book, setBook] = useState({
    title: " ",
    description: " ",
    genre: " ",
    author: " ",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  function handleChange(event) {
    setBook(prev=>({...prev, [event.target.name]: event.target.value}))
  }
    console.log(book)


    async function handleClick (event) {
      event.preventDefault()
      try {
        await axios.put("http://localhost:3000/books/"+ bookId, book)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }
  
  const inputStyles = {
    color: 'gray',
    border: '1px solid black',
    display: 'flex',
    marginBottom: '5px',
    borderRadius: '5px'
  }

  return (
    <div className="form">
      <h1>Update book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' style={inputStyles}/>
      <input type="text" placeholder='description' onChange={handleChange} name='description' style={inputStyles}/>
      <input type="text" placeholder='genre' onChange={handleChange} name='genre' style={inputStyles}/>
      <input type="text" placeholder='author' onChange={handleChange} name='author' style={inputStyles}/>

      <button onClick={handleClick}>Update Book</button>
    
    </div>
  )
}

export default Update
