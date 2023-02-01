import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router }  from 'react-router-dom';

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false); 
  return (
    <div className='py-4 max-w-[1100px] mx-auto'>
        <Router>
        <nav className='flex justify-between font-bold'>
            <Link to={'/'}>
                All Post
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
        </Router>
    </div>
  )
}
