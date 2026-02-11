import React from 'react'

const App = () => {
  function btnClick(){
    console.log("Button Clicked")
  }
  function inputChange(val){
    console.log(val)

  }

  const pageScrolling = (val) => {
    if(val < 0) {
      console.log("Scrolling Up")
    } else {
      console.log("Scrolling Down")
    }
  }

  return (
    <div>
      <h1>Hello, Vikash</h1>
      <input 
        onChange={function(elem) {
          inputChange(elem.target.value)
        }} 
        type="text" 
        placeholder='Enter Name' 
      />
      <div 
      onMouseMove={(elem) => 
      console.log(elem.clientX)} 
      className='box'>

      </div>
      <div onWheel={function (elem) {
        pageScrolling(elem.deltaY)
      }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
    </div>
  )
}

export default App
