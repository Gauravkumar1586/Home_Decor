import { useState } from 'react'
import Flownavbar from './components/Navbar'
import Flowfooter from './components/Footer'
import { Route ,Link , BrowserRouter , Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Flownavbar></Flownavbar>
        <Routes>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
        </Routes>
        <Flowfooter ></Flowfooter>
      </BrowserRouter>

    </>
  )
}

export default App
