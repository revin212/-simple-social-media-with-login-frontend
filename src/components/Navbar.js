import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false); 
  return (
    <div className='py-4 max-w-[1100px] mx-auto fixed top-0 left-0 right-0 bg-gray-800'>
        <nav className='flex justify-between font-bold'>
            <Link to={'/'}>
                All Posts
            </Link>
            {
                loggedIn?
                <div className="right-menu flex gap-4">
                    <Link to={'/myposts'}>
                        <p>My Posts</p> 
                    </Link>
                    <Link to={'/logout'}>
                        <p>Logout</p>
                    </Link>
                </div>
                :
                <div className="right-menu flex gap-4">
                    <Link to={'/login'}>
                        <p>Login</p>
                    </Link>
                    <Link to={'/register'}>
                        <p>Register</p>
                    </Link>
                </div>
            }
        </nav>
    </div>
  )
}
