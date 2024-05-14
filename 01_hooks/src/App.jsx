import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  
    let [ counter ,setCounter]=useState(7)
   const addValue=()=>{
    counter= counter+1
    setCounter(counter)
   }
   const removeValue =()=>{
    counter=counter-1
    setCounter(counter)
   }
  return (
    <>
      <h1>hello harsh</h1>
      <h2>counter value {counter} </h2>

      <button
       onClick={addValue}
       >Add value

      </button>
      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  )
}

export default App
