import Topbar from "../../components/topbar/Topbar";
import Margin from "../../components/margin/Margin";
import Feed from "../../components/feed/Feed";
import Scrollbar from "../../components/scrollbar/Scrollbar";
import "./home.css"

export default function Home({ fetchSearchResults }){
    return(
    <>
        <Topbar fetchSearchResults={fetchSearchResults}/>
        <div className="homeContainer">
            <Margin/>
            <Feed/>
            <Scrollbar/>
        </div>
    </>
    );
}