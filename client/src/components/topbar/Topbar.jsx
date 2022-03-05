import "./topbar.css";
import SearchBar from "../searchBar/searchBar";
import { Person } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import axios from "axios";

export default function Topbar({fetchSearchResults}) {
    // axios
    // .get("/users/me", {jwt_token: JSON.parse(localStorage.getItem("token"))})
    // .then((user)=>{
    //     localStorage.setItem("username", user.name);
    // });
    return (
        <div className="topbarPanel">
            <div className="topLeft">
                {/*Refresh on click?*/}
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">TreeHole</span>
                </Link>
            </div>
            <div className="topCenter">
                <SearchBar fetchSearchResults={fetchSearchResults}/>
            </div>
            <div className="topRight">
                {/* Link to login page */}

                <Link to="/login" >
                    <Person className="PersonIcon" />
                </Link>

                {/* !FIXME Link to personal profile or login page */}
                <Link to="/login" style={{textDecoration: "none"}}>
                    <span className="username">{localStorage.getItem("email")}</span>
                </Link>
            </div>
        </div>
    )
}