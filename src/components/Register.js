import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='max-w-[1100px] mx-auto flex justify-center items-center h-full pt-[6rem]'>
        <div className="register-form w-[100%] max-w-[500px] justify-center items-center">
            <h1 className='font-bold text-2xl mb-[0.5rem]'>
                Register
            </h1>

              <p className="redirect-to-login mb-[2rem]">
                Already have an account? <Link to={'/login'} className='text-blue-400 hover:underline'>Login</Link>
              </p>

            <form action="" className='flex flex-col'>
                <label htmlFor="">Name</label>
                <input type="text" className='mb-[1.5rem] bg-gray-600 outline-none py-2 px-4 rounded-md' />
                <label htmlFor="">Username</label>
                <input type="text" className='mb-[1.5rem] bg-gray-600 outline-none py-2 px-4 rounded-md' />
                <label htmlFor="">Password</label>
                <input type="password" className='mb-[1.5rem] bg-gray-600 outline-none py-2 px-4 rounded-md' />
                <label htmlFor="">Confirm Password</label>
                <input type="password" className='mb-[1.5rem] bg-gray-600 outline-none py-2 px-4 rounded-md' />
                <input type="submit" value={"Register"} className=" bg-gray-500 hover:bg-gray-400 py-2 px-4 cursor-pointer rounded-md mt-[1rem] mb-[3rem]"/>
            </form>
        </div>
    </div>
  )
}
