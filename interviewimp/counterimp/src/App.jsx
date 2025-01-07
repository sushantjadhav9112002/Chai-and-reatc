import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [Counter, setCounter] = useState(12);

  function Add(Counter){

    

    setCounter(Counter=> Counter+1);
    setCounter(Counter=> Counter+1);
    setCounter(Counter=> Counter+1);
    
    
    return Counter;
  }

  return (
    <>
    <h1>Count is {Counter}</h1>
    <button onClick={Add}>Add</button>
    </>
  )
}

export default App
