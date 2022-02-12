import "./post.css"
import {Whatshot} from "@material-ui/icons"

export default function Post(){
    return( 
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <span className="postName">SquadBrickCarrier</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! This is my first post :)</span>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft"></div>
                    <div className="postBottomRight">
                        <img className="like" 
                        src="assets/heart.png" alt=""
                        />
                        <span className="likeCount"># people liked</span>
                    </div>
                </div>
            </div>
        </div>
    )
}