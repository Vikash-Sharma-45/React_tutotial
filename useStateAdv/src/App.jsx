import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState({user: "Chandu", age: 22})
  const [arr, setArr] = useState([1, 2, 3, 4, 5])

  const change = () => {
    // const newNum = {...num}
    // newNum.user = "Dhyan"
    // newNum.age = 23
    // setNum(newNum)

    setNum(prev=>({...prev,age:23}))

    // const newArr = [...arr]
    // newArr.push(6)
    // setArr(newArr)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={change}>Change</button>
      <br />

      <h1>{arr}</h1>
      <button onClick={change} >Change</button>
    </div>
  )
}

export default App
