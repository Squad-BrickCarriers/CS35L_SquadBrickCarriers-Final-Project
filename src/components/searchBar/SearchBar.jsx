import "./searchBar.css"
import {Search} from "@material-ui/icons"
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function SearchBar({ fetchSearchResults }){
    const[keyword, setKeyword] = useState("");
    const searchHandler=(w)=>{
        setKeyword(w.target.value)
    }

    return(
        <form onSubmit={e => e.preventDefault()} className="searchbar">
            <input
            type = "search"
            placeholder="Search for posts" 
            className="searchInput"
            value = {keyword}
            onChange={searchHandler}
            required
            />
            <Search onClick={() => { fetchSearchResults(keyword);}} 
            className="searchIcon">
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    <i className="fas fa-search"></i>
                </Link>
            </Search>
        </form>
    );
}
