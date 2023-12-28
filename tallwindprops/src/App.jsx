import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

//props concept
  return (
    <>
     <h1 className='bg-green-400 p-4 rounded text-black'>Tailwind Css </h1>
    <Card userName="Nishi" btnText="Click me" />
    <Card userName="shristi" btnText="Press Here" />
    </>
  )
}

export default App
