import "./share.css"
import { MailOutline } from "@material-ui/icons"
import { useRef, useState, useEffect } from "react"
import axios from "axios";


export default function Share(){
    const [user, setUser] = useState({})

    
    useEffect(() => {
    axios
    .get("http://localhost:8000/users/me", { headers: {'x-auth-token': localStorage.getItem("token"), 'max_request_header_size': '10000'} })
    .then((res) => {
        setUser(res.data);
            // localStorage.setItem("username", username)
            
            // console.log(user.data);
    })
    .catch((err) => {
        // Handle Error Here
        console.error(err);
    })
}, []);


    // const user = axios.get("http://localhost:8000/users/me", { headers: {'x-auth-token': token, 'max_request_header_size': '10000'} });
    // user.then(data => ( = data));
    // TODO: store user data
    const desc = useRef()
    const[isAnonymous, setAnonymous] = useState(false)

    const anonymousHandler = ()=>{
        setAnonymous(!isAnonymous);
    }

    const submitHandler = async (submit) => {
        submit.preventDefault();
        const newPost = {
            // Check here
            // authorname: user.data.name,
            // authorname: user.data.name,
            // author: user.data._id,
            authorname: user.name,
            author: user._id,
            description: desc.current.value,
            likes: 0,
            anonymous: isAnonymous
        }
        axios.post("http://localhost:8000/posts/newpost", newPost, { headers: {'x-auth-token': localStorage.getItem("token"), 'max_request_header_size': '10000'} })
        .catch(err => {
            alert(err);
        });
        console.log(newPost)
        window.location.reload();
      }

    return(
        // <body>
            <form onSubmit={submitHandler} className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <MailOutline className="postIcon" htmlColor="purple"/>
                        <textarea 
                        type="text"
                        placeholder="Share what's in your mind!" 
                        ref={desc}
                        className="shareInput"
                        required
                        />
                    </div>
                    <hr className="shareHr"></hr>
                    <div className="anonBotton">
                        <div className="option">
                            make this anonymous
                            <input 
                            type="checkbox" 
                            onChange={anonymousHandler}
                            className="checkbox">
                            </input>
                        </div>
                        <button className="shareButton" type="submit">post</button>
                    </div>
                </div>
            </form>
        // </body>
    )
}