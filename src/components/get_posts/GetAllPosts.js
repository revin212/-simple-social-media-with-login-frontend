import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetAllPosts({postIsCreated, setPostIsCreated}) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const getAllPosts = async () => {
        try {
        const response = await axios.get('http://localhost:5000/posts')
        setPosts([...response.data].reverse())
        setLoading(false)
    } catch (error) {
        setError(error)
        setLoading(false)
    }
    }

    useEffect(() => {
        getAllPosts()
        setPostIsCreated(false)
    }, [postIsCreated])

    // if(postIsCreated){
    //     getAllPosts();
    //     setPostIsCreated(false);
    // }

  return (
    <div className="post">
        {posts?.map((post, index) => {
            return(
            <div key={post.id} className="post my-6">
            <div className="header mb-3">
            <div className="author">
            <h3 className='font-semibold text-lg'>
                {post.author}
            </h3>
            <h2 className='font-semibold text-md'>
                @{post.username}
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
