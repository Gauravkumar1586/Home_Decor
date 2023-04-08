import { useState } from 'react'
import Flownavbar from './components/Navbar'
import Flowfooter from './components/Footer'
import { Route ,Link , BrowserRouter , Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Hero from './components/Hero'
import Contact from './pages/Contact'
import Signin from './pages/Signin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Flownavbar></Flownavbar>
        <Routes>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
        </Routes>
        <Flowfooter ></Flowfooter>
      </BrowserRouter>

    </>
  )
}

export default App
