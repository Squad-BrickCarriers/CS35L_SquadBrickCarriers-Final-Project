import Post from "../../components/post/Post";
import Margin from "../../components/margin/Margin";
import Scrollbar from "../../components/scrollbar/Scrollbar";
import Topbar from "../../components/topbar/Topbar";

export default function Search({searchResults, fetchSearchResults}){
    const displayList = searchResults.map((post)=>{
        return(
            <Post
            key={post._id}
            id={post._id}
            authorname={post.authorname}
            desc={post.description}
            anonymous={post.anonymous}
            likes={post.likes}
            liked_users={post.liked_users}
            />
        );
    });

    return(
        <>
        <Topbar fetchSearchResults={fetchSearchResults}/>
        <div className="homeContainer">
            <Margin/>
            <div className="feed">
            <div className="feedWrapper">
                {displayList}
            </div>
        </div>
            <Scrollbar/>
        </div>
        </>
    );
}