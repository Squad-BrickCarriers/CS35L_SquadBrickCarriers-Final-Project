import "./share.css"
import { MailOutline } from "@material-ui/icons"
import { useContext, useRef, useState } from "react"
import axios from "axios";

export default function Share({share}){
    const token = localStorage.getItem("token");
    const user = axios.get("/users/me", {'x-auth-token': token})
    const desc = useRef()
    const[isAnonymous, setAnonymous] = useState(false)

    const anonymousHandler = ()=>{
        setAnonymous(!isAnonymous);
    }

    const submitHandler = async (submit) => {
        submit.preventDefault();
        const newPost = {
            author: user.name,
            description: desc.current.value,
            likes: 0,
            anonymous: isAnonymous
        }
        axios.post("/posts/newpost", newPost)
        .catch(err => {
            alert(err);
        });
        console.log(newPost)
      }

    return(
        <body>
            <form onSubmit={submitHandler} className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <MailOutline className="postIcon" htmlColor="purple"/>
                        <input 
                        type="text"
                        placeholder="Share what's in your mind!" 
                        ref={desc}
                        className="shareInput"
                        required
                        />
                    </div>
                    <hr className="shareHr"></hr>
                    <div className="shareBottom">
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
        </body>
    )
}