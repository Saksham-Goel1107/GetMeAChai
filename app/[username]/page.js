"use client"
import React, { useState } from 'react'
import { useParams } from "next/navigation";

const usernamePage = ({ params }) => {
  const [money, setmoney] = useState("")
  const { username } = useParams();

  const handlePayment = (e) => {
    e.preventDefault()
    console.log(`Payment of €${money} submitted`)
  }
  

  return (
    <>
      <div className='cover w-full relative'>
        <img className='object-cover w-full h-[350px]' src="/patreon_banner.gif" alt="banner" />
        <div className='absolute -bottom-20 right-[43%] border-4 border-white rounded-full'>
          <img className='rounded-full' width={150} height={150} src="/profile.jpg" alt="ProfilePic" />
        </div>
      </div>
      <div className='flex flex-col items-center mt-24 text-center'>
        <div className='text-xl font-bold'>@{username}</div>
        <div className='text-lg text-gray-500'>JB2A - Jules&Ben's Animated Assets</div>
        <div className='text-md text-gray-400 italic'>Creating Animated art for VTT's</div>
        <div className='mt-4 text-sm text-gray-600'>
          <span className='font-semibold'>17,386 members</span> • <span className='font-semibold'>96 posts</span> • <span className='font-semibold'>€16,110/release</span>
        </div>
      </div>
      <div className="payment flex gap-3 w-[80%] mx-auto mt-15">
        <div className="supporters w-1/2 bg-slate-900 rounded-lg">
          <h2 className='text-lg font-bold text-center mb-5'>Supporters</h2>
          <ul className='text-gray-400'>
            <li><img className='inline-block mr-3' width={30} src="/human.svg" alt="Avtar" /><span className='font-semibold capitalize'>saksham</span> donated <span className='font-bold'>$30</span> with a messege "i love u"</li>
           
          </ul>
        </div>
        <div className="makepayment w-1/2 bg-slate-900 rounded-lg p-4">
          <h2 className='text-lg font-bold text-center mb-5'>Make a Payment</h2>
          <form className='flex flex-col gap-3' onSubmit={handlePayment}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
            <input 
              type="text" 
              placeholder="Your Message" 
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
            <input 
              type="number" 
              min={10}
              placeholder='Enter Amount'
              value={money} 
              onChange={(e) => setmoney(Number(e.target.value))}
              className="p-2 rounded bg-gray-800 text-white appearance-none"
              required
            />
            <div className="flex gap-2 mt-2">
              <button 
                type="button" 
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setmoney(10)}
              >
                $10
              </button>
              <button 
                type="button" 
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setmoney(20)}
              >
                $20
              </button>
              <button 
                type="button" 
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setmoney(50)}
              >
                $50
              </button>
            </div>
            <button 
              type="submit" 
              className="bg-green-600 text-white px-4 py-2 rounded mt-3"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default usernamePage
