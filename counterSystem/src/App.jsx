// Hooks example

import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue= () =>{
  if(counter < 10){
    setCounter(counter + 1)
  }
  
  }
  const removeValue=() => {
   if(counter >0)
   {
    setCounter(counter - 1)
   }
    
  }

  return (
    <>
      <h2>Counter System</h2>
      <h4>Counter {counter}</h4>
      <button onClick={addValue}>Add counter {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove counter {counter}</button>
    </>
  )
}

export default App
