import React, {useState, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
import GetAllPosts from './get_posts/GetAllPosts';

export default function AllPosts({loggedIn, setLoggedIn}) {
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [postIsCreated, setPostIsCreated] = useState(false);

    const refreshToken = async () => {
        try {
            const instance = axios.create({withCredentials: true});
            const response = await instance.get('http://localhost:5000/token')
            if(response.status === 200) {
                setLoggedIn(true)
            }
            // console.log(response)
            setToken(response.data.accessToken)
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setUsername(decoded.username);
            // console.log(decoded);
        } catch (error) {
            // console.log(error);
            return
        }
    }

    useEffect(() => {
        refreshToken();
    }, [loggedIn])


    const createPost = async (e) => {
        try {
            e.preventDefault()
            e.target.reset()
            const instance = axios.create({withCredentials: true});
            const response = await instance.post('http://localhost:5000/posts', {
                author: name,
                username: username,
                content: content
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    <div className='max-w-[1100px] mx-auto pt-[3rem]'>
        <div className="create-post my-[3rem]">
            {loggedIn?
            <form onSubmit={async (e)=>{await createPost(e); setPostIsCreated(true)}} className='flex flex-col'>
            <label htmlFor="create-post" className='text-xl mb-4'>Create a Post</label>
            <textarea name="create-post" 
            onChange={(e)=>setContent(e.target.value)}
            id="create-post" 
            rows="5" 
            style={{resize:'none'}}
            placeholder='Write a post...' 
            className=' rounded-md bg-gray-700 outline-none border-[1px] p-4 w-full'></textarea>
            <div className="submit w-full flex justify-end mt-2">
                <input type="submit" value={'Post'} className='w-full max-w-[100px] rounded-md bg-gray-500 hover:bg-gray-400 cursor-pointer py-1' />
            </div>
            </form>
            :
            <div className="login-to-post">
                <p>Please <Link to={'/login'} className='text-blue-400 hover:underline'>Login</Link> to create a post</p>
            </div>
            }
            
        </div>
        <div className="All-posts pb-[3rem]">
            <h1 className='font-bold text-2xl'>
                All Posts
            </h1>

            <div className="posts-container flex flex-col gap-[1.5rem]">
                <GetAllPosts postIsCreated={postIsCreated} setPostIsCreated={setPostIsCreated} />
                {/* <div className="post my-6">
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
                </div> */}
            </div>
        </div>
    </div>
  )
}
