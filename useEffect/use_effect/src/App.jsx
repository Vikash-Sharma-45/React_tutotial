import React, { use } from 'react'
import { useState, useEffect } from 'react'

const App = () => {

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)
  // useEffect(() => {
  //   console.log("Use Effect is running..")
  // }, [num2])


  const [a, setA] = useState(0)
  const [b, setB] = useState(100)

  function achanging(){
    console.log("A is changing..")
  }

  function bchanging(){
    console.log("B is changing..")
  }

  useEffect(() => {
    achanging()
    console.log("Use Effect is running..")
  }, [a])

  return (
    // <div>
    //   <h1>num : {num}</h1>
    //   <h1>num2 : {num2}</h1>
    //   <button onMouseLeave={() => {
        
    //     setNum2(num2 + 10)
    //   }}
    //   onMouseEnter={()=> {
    //     setNum(num + 1)
    //   }}>Click</button>
    // </div>



    <div>
      <h1>A {a}</h1>
      <h1>B {b}</h1>
      <button onClick={()=> {
        setA(a+1)
      }}> Click A</button>
      <button onClick={()=> {
        setB(b-1)
      }}> Click B</button>
    </div>
  )
}

export default App
