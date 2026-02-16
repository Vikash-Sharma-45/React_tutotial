import React, {useState} from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  const [username, setUsername] = useState("Vikash")
  const [users, setUsers] = useState([10, 20, 30])
  const [val, setVal] = useState(0)

  // function changeNum() {
  //   setNum(num + 1)
  //   setUsername("Vikash Sharma")
  //   setUsers([40, 50, 60])
  // }

  function increaseNum() {
    setVal(val + 1)
  }
  function decreaseNum() {
    setVal(val - 1)
  }

  return (
    <div>
      
        {/* <h1> The value of num is {num} <br />
        The value of username is {username} <br />
        The value of users is {users}</h1>
        <button onClick={changeNum}>Click</button>

        <br /> */}

        <h1>{val}</h1>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
      
    </div>

    
  )
}

export default App
