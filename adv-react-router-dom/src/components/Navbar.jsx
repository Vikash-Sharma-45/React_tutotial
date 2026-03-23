import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 py-4 px-4'>
      <h2 className='text-xl font-bold'>Vikash Sharma</h2>
      <div className='flex gap-8'>
        <a className='text-xl font-medium' href="/">Home</a>
        <a className='text-xl font-medium' href="/about">About</a>
        <a className='text-xl font-medium' href="/contact">Contact</a>
        <a className='text-xl font-medium' href="/product">Product</a>
      </div>
    </div>
  )
}

export default Navbar
