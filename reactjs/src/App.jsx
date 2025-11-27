import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Vikash Sharma' img='https://plus.unsplash.com/premium_photo-1760428410219-8b764bb4562f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Dhyanchand' img='https://plus.unsplash.com/premium_photo-1760460411606-df835aabb111?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Shubham' img='https://images.unsplash.com/photo-1752351354291-3d2ce93a17e3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App
