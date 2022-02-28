import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import PostPanel from "../postPanel/PostPanel"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Feed(){
    const [posts, setPosts] = useState([])

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
                {posts.map((p) => (
                    <Post key={p.id} post ={p} />
                ))}
            </div>
        </div>
    )
}