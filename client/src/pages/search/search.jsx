import Post from "../../components/post/Post";
import Topbar from "../../components/topbar/Topbar";

export default function Search(fetchSearchResults, searchResults){
    const displayList = searchResults.map((post)=>{
        return(
            <Post
                key={post.userId}
                id={post.id}
                desc={post.desc}
                like={post.likes}
                liked={post.liked}
            />
        );
    });

    return(
        <>
        <Topbar fetchSearchResults={fetchSearchResults}/>
        <div>
            {displayList}
        </div>
        </>
    );
}