import React,{useEffect,useState} from "react"
import {Routes,Route} from 'react-router-dom'
import Homepage from './index.jsx'
import RecipeItem from './seperateitem.jsx'
import Login from './login.jsx'
import SignUp from './signup.jsx'
import Footer from './footer.jsx'
function App() {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
          <Homepage searchTerm={searchTerm} onSearch={setSearchTerm} />
          <Footer/>
          </>
        }/>
        <Route path="/recipe/:id" element={
          <>
          <RecipeItem/>
          <Footer/>
          </>
        }/>
        <Route path="/login" element={
          <Login/>
        }/>
        <Route path="/signup" element={
          <SignUp/>
        }/>
      </Routes>
    </>
  )
}

export default App
