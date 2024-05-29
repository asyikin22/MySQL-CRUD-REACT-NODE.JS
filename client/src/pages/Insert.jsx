import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Insert = () => {

  const [book, setBook] = useState({
    title: " ",
    description: " ",
    genre: " ",
    author: " ",
  })

  const navigate = useNavigate()

  function handleChange(event) {
    setBook(prev=>({...prev, [event.target.name]: event.target.value}))
  }
    console.log(book)


    async function handleClick (event) {
      event.preventDefault()
      try {
        await axios.post("http://localhost:3000/books", book)
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
      <h1>Insert new book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' style={inputStyles}/>
      <input type="text" placeholder='description' onChange={handleChange} name='description' style={inputStyles}/>
      <input type="text" placeholder='genre' onChange={handleChange} name='genre' style={inputStyles}/>
      <input type="text" placeholder='author' onChange={handleChange} name='author' style={inputStyles}/>

      <button onClick={handleClick}  style={inputStyles}> Add Book</button>
    
    </div>
  )
}

export default Insert
