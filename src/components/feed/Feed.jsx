import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import PostPanel from "../postPanel/PostPanel"
import { Posts } from "../../dummydata"

export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                <PostPanel/>
                {Posts.map((p) => (
                    <Post key={p.id} post ={p} />
                ))}
            </div>
        </div>
    )
}