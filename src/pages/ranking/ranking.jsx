// import Topbar from "../../components/topbar/Topbar";
// import Margin from "../../components/margin/Margin";
// import Feed from "../../components/feed/Feed";
// import Scrollbar from "../../components/scrollbar/Scrollbar";
import "./ranking.css"
import { Link } from "react-router-dom";

export default function Ranking() {
    return (
        <div className="Ranking">
            Ranking page is under construction

            <Link to="/" className="loginButton" >
                <button className="loginButton">
                    Home
                </button>
            </Link>
        </div>
    );
}