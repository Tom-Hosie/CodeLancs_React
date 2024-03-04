import React, {useState,useEffect} from "react"


export default function PostList()
{
    const [posts, setposts]=useState([])

    function getPosts()
    {
        fetch('https://jsonplaceholder.typicode.com/posts/').then(res=>res.json())
        .then(data=>setposts(data))
    }

    useEffect(()=>{
        getPosts()
    },[])

    return(
        <ul className='space-y-3'>
            {
                posts.map((post)=>
                <li key={post.id}> Title: {post.title}
                <span> <br />Body: {post.body}</span>
                
            </li>)
            }
        </ul>
    )
    }