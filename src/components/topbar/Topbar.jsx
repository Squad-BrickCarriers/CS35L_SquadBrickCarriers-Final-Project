import "./topbar.css";
import {Search, Person} from "@material-ui/icons"

export default function Topbar(){
    return(
        <div className="topbarPanel">
            <div className="topLeft">
                <span className="logo">TreeHole</span>
            </div>
            <div className="topCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input 
                    placeholder="Search for posts" 
                    className="searchInput"
                    />
                </div>
            </div>
            <div className="topRight">
                <Person className="PersonIcon"/>
                <span className="username">user-name</span>
            </div>
        </div>
    )
}