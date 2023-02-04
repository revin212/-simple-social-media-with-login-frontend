import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({loggedIn, setLoggedIn}) {
    const navigate = useNavigate();

    const Logout = async () => {
        try {
            const instance = axios.create({withCredentials: true});
            await instance.delete('http://localhost:5000/logout')
            setLoggedIn(false)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

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
                    <Link to={'/'} onClick={Logout}>
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
