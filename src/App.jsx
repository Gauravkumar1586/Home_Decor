import { useState } from 'react'

import Flownavbar from './components/Navbar'

import Flowcrousel from './components/Crouser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flownavbar></Flownavbar>
    <Flowcrousel></Flowcrousel>
    </>
  )
}

export default App
