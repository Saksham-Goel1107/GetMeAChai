import React from 'react'

const footer = () => {
  return (
    <footer className='bg-black text-white p-6'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Company Info */}
        <div>
          <h3 className='font-bold text-lg'>Get Me A Chai</h3>
          <p className='text-gray-400 mt-2'>Your favorite chai, delivered to your doorstep.</p>
        </div>
        {/* Navigation Links */}
        <div>
          <h4 className='font-bold text-lg'>Quick Links</h4>
          <ul className='mt-2'>
            <li className='hover:text-gray-400 cursor-pointer'>Home</li>
            <li className='hover:text-gray-400 cursor-pointer'>About</li>
            <li className='hover:text-gray-400 cursor-pointer'>Projects</li>
            <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h4 className='font-bold text-lg'>Follow Us</h4>
          <div className='flex gap-4 mt-2'>
            <span className='hover:text-gray-400 cursor-pointer'>Facebook</span>
            <span className='hover:text-gray-400 cursor-pointer'>Twitter</span>
            <span className='hover:text-gray-400 cursor-pointer'>Instagram</span>
          </div>
        </div>
      </div>
      <div className='text-center text-gray-500 mt-6'>
        © 2025 Get Me A Chai. All rights reserved.
      </div>
    </footer>
  )
}

export default footer
