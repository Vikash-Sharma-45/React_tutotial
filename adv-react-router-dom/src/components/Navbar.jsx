import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 py-4 px-4'>
      <h2 className='text-xl font-bold'>Vikash Sharma</h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-medium' to="/">Home</Link>
        <Link className='text-xl font-medium' to="/about">About</Link>
        <Link className='text-xl font-medium' to="/contact">Contact</Link>
        <Link className='text-xl font-medium' to="/courses">Courses</Link>
        <Link className='text-xl font-medium' to="/product">Product</Link>
        
      </div>
    </div>
  )
}

export default Navbar
