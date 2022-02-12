import "./post.css"
import {Whatshot} from "@material-ui/icons"

export default function Post(){
    return(
        <div className="postPanel">
            <div className="postPanelTop">
                <span className="panelText">What's going on recently:</span>
                <Whatshot className="rank"/>
            </div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <span className="postName">nameORAnonymous</span>
                        <span className="postDate">date</span>
                    </div>
                    <div className="postCenter">
                        <span className="postText">Hey!</span>
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
        </div>
    )
}