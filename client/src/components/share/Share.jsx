import "./share.css"
import { MailOutline } from "@material-ui/icons"
import { useContext, useRef, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Share({share}){
    const {user} = useContext(AuthContext)
    const desc = useRef()
    const[isAnonymous, setAnonymous] = useState(false)

    const anonymousHandler = ()=>{
        setAnonymous(!isAnonymous);
    }

    const submitHandler = async (submit) => {
        submit.preventDefault();
        const newPost = {
            author: user._id,
            description: desc.current.value,
            likes: 0,
            anonymous: isAnonymous
        }
        try{
            await axios.post("/posts", newPost)
        } catch(err){
        }
      }

    return(
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
    )
}