import React, {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])


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

    // const getData = async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   console.log(response)

    //   const data = await response.json()
    //   console.log(data)
    // }

    // Api call using axios



    const getData = async () => {
      const response = await axios.get('https://picsum.photos/v2/list')
      setData(response.data)
    }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {
          data.map(function(elem, idx){
            return <h3>Hello {elem.author}{idx}</h3>
          })
        }
      </div>

      
    </div>
  )
}

export default App
