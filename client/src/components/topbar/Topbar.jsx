import "./topbar.css";
import SearchBar from "../searchBar/SearchBar";
import { Person } from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbarPanel">
            <div className="topLeft">
                {/*Refresh on click?*/}
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">TreeHole</span>
                </Link>
            </div>
            <div className="topCenter">
                <SearchBar />
            </div>
            <div className="topRight">
                {/* Link to login page */}

                <Link to="/login" >
                    <Person className="PersonIcon" />
                </Link>

                {/* !FIXME Link to personal profile or login page */}
                <Link to="/login" style={{textDecoration: "none"}}>
                    <span className="username">user-name</span>
                </Link>
            </div>
        </div>
    )
}