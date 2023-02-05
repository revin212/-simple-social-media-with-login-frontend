import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import deleteIcon from '../../images/delete-icon.svg'

export default function GetUserPosts({token, username}) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getUserPosts = useCallback(async () => {
        try {
            const instance = axios.create({withCredentials: true});
            const response = await instance.get(`http://localhost:5000/posts/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setPosts([...response.data].reverse())
            setLoading(false)
        } catch (error) {
            console.log('error: ',error)
            setError(error)
            setLoading(false)
        }
    }, [token, username])

    useEffect(()=>{ getUserPosts(); } , [getUserPosts])


    const deletePost = async (e) => {
        try {
            // console.log(e.target.id)
            const id = Number(e.target.id);
            const instance = axios.create({withCredentials: true});
            await instance.delete(`http://localhost:5000/posts/${username}/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            await getUserPosts()
        } catch (error) {
            console.log('error: ',error)
            setError(error)
        }
    }

  return (
    <div className="post">
        {posts?.map((post, index) => {
            return(
            <div key={index} className="post my-6 break-words">
                <div className="header mb-3 flex justify-between">
                    <div className="author">
                    <h3 className='font-semibold text-lg'>
                        {post.author}
                    </h3>
                    <h2 className='font-semibold text-md'>
                        @{post.username}
                    </h2>
                    </div>
                    <div className="delete">
                        <button id={`${post.id}`} onClick={(e)=>deletePost(e)}><img src={deleteIcon} alt='delete' className='w-[25px]' /></button>    
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
