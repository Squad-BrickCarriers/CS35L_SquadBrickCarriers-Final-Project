import "./share.css"
import { MailOutline } from "@material-ui/icons"
import { useState } from "react"

export default function Share({share}){
    const [description, setDescription] = useState("");
    const[isAnonymous, setAnonymous] = useState(false)


    const descHandler = (desc)=>{
        setDescription(desc.target.value);
    }

    const anonymousHandler = ()=>{
        setAnonymous(!isAnonymous);
    }

    const submitHandler = (submit) => {
        submit.preventDefault();
        share(description, setDescription);
      }

    return(
        <form onSubmit={submitHandler} className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <MailOutline className="postIcon" htmlColor="purple"/>
                    <input 
                    type="text"
                    id ="newPost"
                    value={description}
                    placeholder="Share what's in your mind!" 
                    onChange={descHandler}
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