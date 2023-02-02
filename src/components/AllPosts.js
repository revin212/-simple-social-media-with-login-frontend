import React from 'react'

export default function MyPosts() {
  return (
    <div className='max-w-[1100px] mx-auto'>
        <div className="create-post my-[3rem]">
            <form action="" className='flex flex-col'>
                <label htmlFor="create-post" className='text-xl mb-4'>Create Post</label>
                <textarea name="create-post" id="create-post" rows="5" style={{resize:'none'}}
                placeholder='Write a post...' className=' rounded-md bg-gray-700 outline-none border-[1px] p-4 w-full max-w-[700px]'></textarea>
                <div className="submit w-full max-w-[700px] flex justify-end mt-2">
                    <input type="submit" value={'Post'} className='w-full max-w-[100px] rounded-md bg-gray-500 hover:bg-gray-400 cursor-pointer py-1' />
                </div>
            </form>
        </div>
        <div className="All-posts pb-[3rem]">
            <h1 className='font-bold text-2xl'>
                All Posts
            </h1>
            <div className="posts-container flex flex-col gap-[1.5rem]">
                <div className="post my-6">
                    <div className="header mb-3">
                        <div className="author">
                        <h3 className='font-semibold text-lg'>
                            Revin Dennis Ramadhan
                        </h3>
                        <h2 className='font-semibold text-md'>
                            @revin21
                        </h2>
                        </div>                        
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla debitis libero ut impedit iste nobis,</p>
                </div>
                <div className="post my-6">
                    <div className="header mb-3">
                        <h3 className='font-semibold text-lg'>
                            Revin Dennis Ramadhan
                        </h3>
                        <h2 className='font-semibold text-md'>
                            @revin21
                        </h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    </div>
  )
}
