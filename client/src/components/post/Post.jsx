import "./post.css"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Post(post){
    // console.log(post);
    const [user, setUser] = useState({})
    const [like, setLike] = useState(post.likes)
    // const [isLiked, setIsLiked] = useState(null)
    let isLiked;

    useEffect(() => {
    const sendGetRequest = async () => {
        try {
            const res = await axios.get("http://localhost:8000/users/me", { headers: {'x-auth-token': localStorage.getItem("token"), 'max_request_header_size': '10000'} });
            // localStorage.setItem("username", username)
            setUser(res.data);
            // console.log(user.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    sendGetRequest();
}, [user, setUser]);


    const likeHandler= ()=>{
        try{
            console.log(post);
            // console.log(user);
            axios.patch("http://localhost:8000/posts/"+post.id+"/like", {id: user._id});
            axios
            .get("http://localhost:8000/posts/"+post.id+"/check-like", {params: {id: user._id}})
            .then((res)=>{
                let check = res.data;
                console.log(check);
                if(res.data){
                    // setIsLiked(true);
                    isLiked=true;
                } else{
                    isLiked=false;
                }
                console.log(isLiked);
                setLike(isLiked ? like-1 : like+1);
            })
            // if(res === "true"){
            //     setIsLiked(true);
            // } else{
            //     setIsLiked(false);
            // }
            // console.log(res);
        }
        catch(err){
            alert(err);
        }
    };

    return( 
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <span className="postName">
                        {post.anonymous ? "Anonymous User" : post.authorname}
                    </span>
                    {/* <span className="postDate">
                        {post.date}
                    </span> */}
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