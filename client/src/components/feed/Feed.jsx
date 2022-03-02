import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import PostPanel from "../postPanel/PostPanel"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Feed(){
    const [posts, setPosts] = useState([])
    const [rankMode, setRankMode] = useState("false")
    const postList = posts.map((post) => {
        const postBody = 
          <Post
            key={post._id}
            id={post._id}
            desc={post.description}
            likes={post.likes}
            liked={post.liked}
         />
    })

    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = await axios.get("posts//")
            setPosts(res.data);
        };
        fetchPosts();
    },[])

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                <PostPanel/>
                {postList}
            </div>
        </div>
    )
}