import "./searchBar.css"
import {Search} from "@material-ui/icons"
import { useState } from "react"

export default function SearchBar(){
    const[keyword, setKeyword] = useState("");
    const searchHandler=(w)=>{
        setKeyword(w.target.value)
    }

    return(
        <div className="searchbar">
            <Search className="searchIcon"/>
                <input 
                    type = "search"
                    placeholder="Search for posts" 
                    className="searchInput"
                    value = {keyword}
                    onChange={searchHandler}
                    required
                />
        </div>
    )
}