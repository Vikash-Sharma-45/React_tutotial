import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(() => {
    console.log("Use Effect is running..")
  }, [num2])

  return (
    <div>
      <h1>num : {num}</h1>
      <h1>num2 : {num2}</h1>
      <button onMouseLeave={() => {
        
        setNum2(num2 + 10)
      }}
      onMouseEnter={()=> {
        setNum(num + 1)
      }}>Click</button>
    </div>
  )
}

export default App
