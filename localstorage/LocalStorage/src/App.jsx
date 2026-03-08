import React from 'react'

const App = () => {


  // localStorage.setItem('name', 'John Doe')
  // localStorage.setItem('age', '30')
  // sessionStorage.setItem('sessionName', 'Vikash Sharma')
  // const name = localStorage.getItem('name')
  // const age = localStorage.getItem('age')
  // console.log(name, age) // Output: John Doe
  // localStorage.clear()
  // sessionStorage.clear()


    // const user = {
    //   name : "Vikash Sharma",
    //   age : 320,
    //   city : "Lucknow"
    // }

    // localStorage.setItem('user', JSON.stringify(user))
    // localStorage.clear()
    // console.log(user)


    // Api call using fetch using function

    // async function getData() {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   console.log(response)
    
    // Api call using fetch using arrow function

    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log(response)
    }


  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App
