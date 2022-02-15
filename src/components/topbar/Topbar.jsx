import "./topbar.css";
import SearchBar from "../searchBar/SearchBar";
import {Person} from "@material-ui/icons"

export default function Topbar(){
    return(
        <div className="topbarPanel">
            <div className="topLeft">
                <span className="logo">TreeHole</span>
            </div>
            <div className="topCenter">
                <SearchBar/>
            </div>
            <div className="topRight">
                <Person className="PersonIcon"/>
                <span className="username">user-name</span>
            </div>
        </div>
    )
}