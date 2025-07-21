import React from "react"
import {Routes,Route} from 'react-router-dom'
import Homepage from './index.jsx'
import Login from './login.jsx'
import SignUp from './signup.jsx'
import Footer from './footer.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
          <Homepage/>
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
