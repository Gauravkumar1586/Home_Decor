import { useState ,useEffect } from 'react'
import Flownavbar from './components/Navbar'
import Flowfooter from './components/Footer'
import { Route ,Link , BrowserRouter , Routes } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/Contact'
import Signin from './pages/Signin'
import Login from './pages/Login'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import PaymentDetails from './pages/PaymentDetails'
import PaymentGate from './pages/PaymentGate'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
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
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path='/PaymentDetails' element={<PaymentDetails/>}></Route>
          <Route path='/PaymentGate' element={<PaymentGate/>}></Route>
        </Routes>
        <Flowfooter ></Flowfooter>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
