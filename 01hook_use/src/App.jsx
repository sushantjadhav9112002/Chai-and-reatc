import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'







function App() {
  let [count,setcount]=useState(10);


  const add= ()=>{
    if(count<20){
      setcount(count+1);

    }
  }
  
  const sub= ()=>{
   
    if(count>0){
      setcount(count-1);
    }
    
  }
  

  return (
    <>
    <h1>The Number is {count}</h1>
    
    <button onClick={add}>Add</button>
    <hr/>
    <button onClick={sub}>Subtract</button>
    </>
  )
}

export default App
