import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Card'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Card message={"Hello my name is Sushant"} btn_name={"More stories"}/>
      <Card/>
    </>
  )
}

export default App
