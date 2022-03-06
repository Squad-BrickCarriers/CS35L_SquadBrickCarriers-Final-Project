import "./post.css"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Post(post){
    console.log(post);
    
    const [like, setLike] = useState(post.likes)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    useEffect(()=>{
        
    },[])

    return( 
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <span className="postName">
                        {post.anonymous ? "Anonymous User" : post.authorname}
                    </span>
                    <span className="postDate">
                        {post.date}
                    </span>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft"></div>
                    <div className="postBottomRight">
                        <img className="like" 
                        src="assets/likeIcon.png" 
                        onClick={likeHandler}
                        alt=""
                        />
                        <span className="likeCount">{like} people liked</span>
                    </div>
                </div>
            </div>
        </div>
    )
}