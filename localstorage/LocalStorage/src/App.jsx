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
    const user = {
      name : "Vikash Sharma",
      age : 320,
      city : "Lucknow"
    }

    localStorage.setItem('user', JSON.stringify(user))
    localStorage.clear()
    console.log(user)

  return (
    <div>
      App
    </div>
  )
}

export default App
