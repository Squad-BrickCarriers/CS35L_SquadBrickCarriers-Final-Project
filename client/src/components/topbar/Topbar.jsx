import "./topbar.css";
import SearchBar from "../searchBar/searchBar";
import { Person } from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Topbar({ fetchSearchResults }) {
    // axios
    // .get("/users/me", {jwt_token: JSON.parse(localStorage.getItem("token"))})
    // .then((user)=>{
    //     localStorage.setItem("username", user.name);
    // });

    const logoutHandler = async (logout) => {
        logout.preventDefault();
        localStorage.clear();
        window.location = '/login';
    }


    return (
        <div className="topbarPanel">
            <div className="topLeft">
                {/*Refresh on click*/}
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <span className="logo">TreeHole</span>
                </Link>
            </div>
            <div className="topCenter">
                <SearchBar fetchSearchResults={fetchSearchResults} />
            </div>
            <div className="topRight">
                {/* <Link to="/login" > */}
                <span className="logout" onClick={logoutHandler}>log out</span>
                {/* </Link> */}

                <Link to="/login" >
                    <Person className="PersonIcon" />
                </Link>

                {/*Link to personal profile or login page */}
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <span className="username">
                        {localStorage.getItem("username")}
                    </span>
                </Link>
            </div>
        </div>
    )
}