# My Library

----------
**ERRORS-SOLUTIONS**
---------

**26/5/2024**: 
- I am working on running React with Node.js. I am still looking for solutions. I keep getting error when I tried running them on different local hosts
- Update: **RESOLVED ON 29/5**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/35ab41ab-c75a-47cb-816a-926d24d926ce)

----------
**Project Structure**
---------

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/0433605e-1f5a-4947-b4da-0fc341dae47a)

----------
**MySQL Setup**
---------

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/d5557f74-adf9-4183-9060-69a501954271)

----------
**TEST API ENDPOINT - FETCH DATA FROM DB & CREATE NEW DATA**
---------

**MAKING API REQUEST USING EXPRESS SERVER - TEST**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/4fbf2c2b-8639-42f1-a16d-b07f8db83403)

**FETCH DATA FROM MYSQL (READ)**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/e070d5bc-047c-4118-871a-29ed205edaa6)


**TEST POST REQUEST - ADD NEW BOOK**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/c2837198-bab2-4de4-bdd7-6ad92a163330)

**SEND DATA AS A USER**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/a7eb1fc4-401f-4b8a-a154-635b651edee6)

----------
**Tailwind**
---------

- https://tailwindcss.com/docs/guides/vite
- Install as per the documentation
- Delete App.css
- Install ES7+ in VS Code
- You can override tailwind style if you prefer to do it the other way via
  1) Inline CSS
  2) Custom CSS class - you got to import stylesheet to the component you want the style to apply
  3) Scoped Styles (React Inline Styles)
- Test to see if tailwind runs properly in our app

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/df9b16c5-cbc1-4389-9ded-57030210343f)

----------
**Add React Router Dom**
---------

- Npm install react-router-dom
- Import BrowserRouter, Routes and Route from react-router-dom
- Wrap our apps inside BrowserRouter and then Routes.
- Within routes, we specify path and element to the different pages
- In this example, we have pages for 'Books', 'Insert' and 'update'

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/501da3c4-bc72-4a76-a417-51e5ddb53ee2)

----------
**Axios**
---------

- A promise-based HTTP client for making requests to the server.
- Used to send HTTP request
- It allows us to API request using a react app
- After installing axios, write npm run build

----------
**FETCH DATA FROM MYSQL**
---------

- Create a variable state 'book' to store book inside it, set initial value to empty array
- Create fetching function using effect hook with empty dependency - it will only run once when mount
- Install 'cors' in the backend file to allow cross-origin resource sharing, remember, backend and client files run on a different localhosts

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/1783eb6c-c10d-48d0-b184-5b0b9ef34cc8)

**React has succesfully fetched data from backend server**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/f371cd8c-e67f-4f51-82c0-da616f4c2d07)

**Update our books on 'book page'**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/2539c33b-71b9-4afb-9af8-3c9333779851)

**Return JSX**
- Map through books array
- For each book inside the array, return another div
  1) Title description
  2) Genre
  3) Price
- It looks hideous at this stage because I could not be bothered to style them lol
- Write unique key for each item otherwise we will get this warning in the console

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/d119b40c-e43a-45d0-89ea-2d80459a9cb2)

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/ae10c099-069b-4fc7-9470-8cd6c8930064)

**Add button element**
- Add a button element, style it with Tailwind by giving it a className.
- Add button using Link imported from 'react-router-dom' and direct it to the 'insert' page
- Cross-refer: The link element
  
![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/743029c5-eeee-4732-a413-426651dd6848)

----------
**ADD NEW DATA TO MYSQL DATABASE**
---------

- Import useState from react
- Create a form with 4 different input boxes
- Create state variable book - It's going to be empty for its initial value
- Assign names to each input element inside HTML
- Assign onChange function to each of input element
- Cross-refer:
  1) onChange event handler
  2) Update Object in state
     
 ![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/cfc8527f-1c52-4ce3-96c5-0f5048dd9c21)

  **Create function to handle change inside input box**
- Accept callbacks to some function
- Create a function handleChange, set event as parameter
- use setter function to access event, target and its value
- Use updater function - set the book into JS object and use spread operator to indicate change from previous state to next state
- Log 'book' variable to the console to see if this setter function works

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/a57f8c9e-093b-4fa0-9346-5cabb5242413)

**Send the newly added book to the server**
- Create a button element
- Assign a JS handle click function to it
- Create a function to handle click button
- Write prevent default to avoid the page from refreshing upon clicking the button
- Use axios to send our data to the database - post request
- Remember to import axios from react and useNavigate

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/ac48d7d6-ff45-42cd-9924-6c4dfae7040e)

**Style it inside index.css**
- I stopped using tailwind because it's messy and I'm not familiar with it
- I style it inside index.css file in react
- Use grid to make sure one row only has 3 books
- Add delete and update button in 'book' page
- My ugly library for now at this stage lol

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/535260f0-8b25-4264-ab58-67e3e97a6058)

----------
**MODIFY TABLE INSIDE MYSQL DATABASE**
---------

**Change cover to author in MySQL**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/e715e8f3-2692-4c09-88a6-9780bce408e3)

**Updated frontend (React) and backend (Node.js) from the modification**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/0e2d7cb6-713f-44ea-b4ba-8a711c737d25)

----------
**DELETE OPERATION**
---------

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/596c5835-e07e-4968-a6c3-185dae692469)

**Updated book list after deletion**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/3a9b786f-3e7a-41b6-b96f-bf36e70a50e1)

----------
**UPDATE OPERATION**
---------

**REDIRECT PAGE**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/e59feef8-2668-44d8-9851-48610ab7e67e)

**UPDATE PAGE - CREATE A FUNCTION TO UPDATE DATA**

![image](https://github.com/asyikin22/MySQL-CRUD-REACT-NODE.JS/assets/148519441/d1490e38-1b34-41c7-8e03-cc0fb37c1fc2)

----------
**THE END**
---------

I've finished creating my first fully functional CRUD app using React, Node.js, and MySQL.

WEEEE!!! 🎉


