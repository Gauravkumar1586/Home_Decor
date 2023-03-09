import { useState } from 'react'
import Flownavbar from './components/Navbar'
import Flowcrousel from './components/crousel'
import Flowfooter from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flownavbar></Flownavbar>
    <Flowcrousel></Flowcrousel>
    <Flowfooter ></Flowfooter>
    </>
  )
}

export default App
