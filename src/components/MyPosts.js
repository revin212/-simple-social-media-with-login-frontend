import React from 'react'

export default function MyPosts() {
  return (
    <div className='max-w-[1100px] mx-auto pt-[6rem]'>
        <div className="profile mb-[2rem] mt-[2rem]">
            <h1 className='font-bold text-2xl'>
                Revin Dennis Ramadhan
            </h1>
            <h2 className='font-semibold text-lg'>
                @revin21
            </h2>
        </div>
        <div className="my-posts pb-[3rem]">
            <h3 className='font-semibold text-lg'>
                My Posts
            </h3>
            <div className="posts-container flex flex-col gap-[1.5rem]">
                <div className="post my-6">
                    <div className="header mb-3 flex justify-between items-start">
                        <div className="author">
                        <h3 className='font-semibold text-lg'>
                            Revin Dennis Ramadhan
                        </h3>
                        <h2 className='font-semibold text-md'>
                            @revin21
                        </h2>
                        </div>
                        <div className="delete">
                            D
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla debitis libero ut impedit iste nobis,</p>
                </div>
                <div className="post my-6">
                    <div className="header mb-3 flex justify-between items-start">
                        <div className="author">
                        <h3 className='font-semibold text-lg'>
                            Revin Dennis Ramadhan
                        </h3>
                        <h2 className='font-semibold text-md'>
                            @revin21
                        </h2>
                        </div>
                        <div className="delete">
                            D
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    </div>
  )
}
