import "./topbar.css";
import {Search, Home, Whatshot} from "@material-ui/icons"

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
                <Whatshot className="rank"/>
                <span><Home className="HomeIcon"/></span>
            </div>
        </div>
    )
}