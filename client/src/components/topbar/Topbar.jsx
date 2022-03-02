import "./topbar.css";
import SearchBar from "../searchBar/searchBar";
import { Person } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Topbar() {
    const {user} = useContext(AuthContext);
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
                    <span className="username">{user._id}</span>
                </Link>
            </div>
        </div>
    )
}