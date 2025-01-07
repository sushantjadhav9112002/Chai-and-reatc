import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('Olive');

  return (
    <>
      <div>
        <div style={{
          backgroundColor: color,
          width: "100vw", // Full width of the viewport
          height: "100vh", // Full height of the viewport
          margin: 0,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
        }}>
          <button onClick={() => setColor("Red")}>Red</button>
          <button onClick={() => setColor("Blue")}>Blue</button>
          <button onClick={() => setColor("White")}>White</button>
        </div>
      </div>
    </>
  )
}

export default App
