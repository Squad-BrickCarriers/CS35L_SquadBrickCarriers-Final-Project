import "./share.css"
import { Email } from "@material-ui/icons"

export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <div className="username"></div>
                    <Email className="postIcon" htmlColor="purple"/>
                    <input 
                    placeholder="Share what's in your mind!" 
                    className="shareInput"
                    />
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="option">
                        make this anonymous
                        <input 
                        type="checkbox" 
                        className="checkbox">
                        </input>
                    </div>
                    <button className="shareButton">post</button>
                </div>
            </div>
        </div>
    )
}