import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import PostPanel from "../postPanel/PostPanel"

export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                <PostPanel/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}