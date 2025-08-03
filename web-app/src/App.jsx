import React,{useEffect,useState} from "react"
import {Routes,Route} from 'react-router-dom'
import Homepage from './index.jsx'
import RecipeItem from './seperateitem.jsx'
import Order from './order.jsx'
import Login from './login.jsx'
import SignUp from './signup.jsx'
import Confirm from './confirmorder.jsx'
import Purchased from './purchased.jsx'
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
        <Route path="/order/:id" element={
          <>
          <Order/>
          <Footer/>
          </>
        }/>
        <Route path="/login" element={
          <Login/>
        }/>
        <Route path="/signup" element={
          <SignUp/>
        }/>
        <Route path="/confirm" element={
          <Confirm/>
        }/>
        <Route path="/purchased" element={
          <Purchased/>
        }/>
      </Routes>
    </>
  )
}

export default App
