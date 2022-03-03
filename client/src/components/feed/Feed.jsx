import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import PostPanel from "../postPanel/PostPanel"
import RankingIcon from "../rankingIcon/RankingIcon";
import { useEffect, useState } from "react"
import axios from "axios"

export default function Feed(){
    const [posts, setPosts] = useState([])
    const[rank, setRank] = useState(false)
    const rankHandler = (e) =>{
        setRank(!rank);
    }

    useEffect(() => {
        if(!rank){
            axios
            .patch('http://localhost:8000/posts/getall', { jwt_token: JSON.parse(localStorage.getItem("token")) })
            .then(result => {
            console.log("Fetched all posts", result);
            setPosts(result.data);
            })
            .catch(error => {
            alert(error);
            });
        }
        else{
            axios
            .patch('http://localhost:8000/posts/rank', { jwt_token: JSON.parse(localStorage.getItem("token")) })
            .then(result => {
            console.log("Fetched ranked posts", result);
            setPosts(result.data);
            })
            .catch(error => {
            alert(error);
            });
        }
      }, []);

    const postList = posts.map((post) => {
        const postBody = 
          <Post
            key={post._id}
            id={post._id}
            desc={post.description}
            likes={post.likes}
            liked={post.liked}
         />
         //show posts
        return postBody;
    })

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                <PostPanel/>
                <RankingIcon onClick={rankHandler}/>
                {postList}
            </div>
        </div>
    )
}