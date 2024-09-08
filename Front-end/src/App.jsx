import { useState } from 'react'
import './App.css'
import Webpage from './pages/Webpage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Webpage/>
    </>
  )
}

export default App
