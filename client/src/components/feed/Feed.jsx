import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { useEffect, useState } from "react"
import { Whatshot } from "@material-ui/icons"
import axios from "axios"

export default function Feed(){
    const [posts, setPosts] = useState([])
    const[rank, setRank] = useState(false)
    const rankHandler = () =>{
        setRank(!rank);
    }
    

    useEffect(() => {
        if(!rank){
            axios
            .get('http://localhost:8000/posts/getall'/*, { jwt_token: JSON.parse(localStorage.getItem("token")) }*/)
            .then(result => {
            // console.log("Fetched all posts", result);
            setPosts(result.data);
            })
            .catch(error => {
            alert(error);
            });
        }
        else{
            axios
            .get('http://localhost:8000/posts/rank')
            .then(result => {
            // console.log("Fetched ranked posts", result);
            setPosts(result.data);
            })
            .catch(error => {
            alert(error);
            });
        }
      }, [rank, setRank]);

    const postList = posts.map(post => {
        const postBody = 
          <Post
            key={post._id}
            id={post._id}
            authorname={post.authorname}
            desc={post.description}
            anonymous={post.anonymous}
            likes={post.likes}
            liked_users={post.liked_users}
         />
         //show posts
        return (postBody);
    })

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                <div className="postPanel">
                    <div className="postPanelTop">
                        <span className="panelText">What's going on recently:</span>
                        <Whatshot onClick={rankHandler} className="rank"/>  
                    </div>
                </div>
                {postList}
            </div>
        </div>
    )
}