import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetUserPosts({token, username}) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const getAllPosts = async () => {
        // console.log('token: ', token)
        try {
            const instance = axios.create({withCredentials: true});
            const response = await instance.post('http://localhost:5000/posts/user', {
                username: username
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            // console.log('response: ',response)
            setPosts([...response.data].reverse())
            // console.log('posts: ', posts)
            setLoading(false)
        } catch (error) {
            console.log('error: ',error)
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllPosts()
    }, [])

  return (
    <div className="post">
        {posts?.map((post, index) => {
            return(
            <div key={index} className="post my-6">
                <div className="header mb-3">
                <div className="author">
                <h3 className='font-semibold text-lg'>
                    {post.author}
                </h3>
                <h2 className='font-semibold text-md'>
                    {post.username}
                </h2>
                </div>                        
                </div>
                <p>{post.content}</p>
            </div>
            )
        })
        }
        {loading && <div className='fonst-semibold text-lg'>Loading...</div>}
        {error && <div className='fonst-semibold text-lg'>{error}</div>}
    </div>
  )
}
