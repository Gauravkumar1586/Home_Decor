import { useState } from 'react'
import Flownavbar from './components/Navbar'
import Flowfooter from './components/Footer'
import { Route ,Link , BrowserRouter , Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/Contact'
import Signin from './pages/Signin'
import Gallery from './pages/Gallery'
import Beds from './pages/Beds'
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Flownavbar></Flownavbar>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Gallery" element={<Gallery/>}></Route>
          <Route path="/Beds" element={<Beds/>}></Route>
        </Routes>
        <Flowfooter ></Flowfooter>
      </BrowserRouter>

    </>
  )
}

export default App
