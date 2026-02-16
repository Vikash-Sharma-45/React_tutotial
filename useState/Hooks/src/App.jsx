import React, {useState} from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  function changeNum() {
    setNum(num + 1)
  }
  return (
    <div>
        <h1> The value of num is {num}</h1>
        <button onClick={changeNum}>Click</button>
      
    </div>
  )
}

export default App
