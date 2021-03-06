import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from "react";

import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Search from "./pages/search/search";
import { AuthContext } from "./components/context/AuthContext";

function App() {
  // Redirect users if they are not logged in
  useEffect(() => {
    if (window.location.href !== "http://localhost:3000/signup" &&
      window.location.href !== "http://localhost:3000/login" &&
      window.location.href !== "http://localhost:3000/" &&
      !localStorage.getItem('token')) {
      alert("You are not Logged in! Sign up if you don't have an account");
      window.location = '/signup';
    }
  });

  //get user
  const { user } = useContext(AuthContext)

  //for search
  const [searchResults, setSearchResults] = useState([]);

  //to fetch search results
  // let keyword;
  //let SearchResult = [];
  const fetchSearchResults = (searchWord) => {
    if(searchWord != ""){
      axios
        .get('http://localhost:8000/posts/search', { params: { keyword: searchWord } })
        .then((results) => {
          console.log(results.data);
          setSearchResults(results.data);
        })
        .catch((error => {
          alert(error);
        }))
    } else {
      alert("keyword required");
      window.location = "/home"
    }
  }

  return (
    //!Notice the format update of React Router V6
    <div className="app">
      <Router>
        <Routes>
          {/* Can not see the homepage without the user credentials.*/}
          <Route exact path='/' element={user ? <Home /> : <Signup />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={user ? <Navigate to="/login" /> : <Signup />} />
          <Route path='/home' element={<Home fetchSearchResults={fetchSearchResults} />} />
          <Route path="/search" element={<Search searchResults={searchResults} fetchSearchResults={fetchSearchResults} />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
