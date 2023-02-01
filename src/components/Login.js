import React from 'react'

export default function Login() {
  return (
    <div className=' mt-[3rem] max-w-[1100px] mx-auto flex justify-center items-center'>
        <div className="login-form w-[100%] max-w-[500px] justify-center items-center">
            <h1 className='font-bold text-2xl mb-[2rem]'>
                Login
            </h1>
            <form action="" className='flex flex-col'>
                <label htmlFor="">Username</label>
                <input type="text" className='mb-[1.5rem] bg-gray-600 outline-none py-2 px-4 rounded-md' />
                <label htmlFor="">Password</label>
                <input type="password" className='mb-[1.5rem] bg-gray-600 outline-none py-2 px-4 rounded-md' />
                <input type="submit" value={"Submit"} className=" bg-gray-700 hover:bg-gray-600 py-2 px-4 cursor-pointer rounded-md mt-[1rem]"/>
            </form>
        </div>
    </div>
  )
}
