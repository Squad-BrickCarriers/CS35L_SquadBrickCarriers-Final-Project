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
import { AuthContext } from "./components/context/AuthContext";

function App() {
  // Get router ready so that we don't have to comment out things
  //!Notice the format update of React Router V6

  //get user
  const {user} = useContext(AuthContext)

  //for search
  const [searchResults, setSearchResults] = useState([]);

  //to fetch search results
  const fetchSearchResults = (searchWord) => {
    //TO DO
    axios
    .post()
    .then((results)=>{
      console.log(results);
      setSearchResults(results.data);
    })
    .catch((error=>{
      alert(error);
    }))
  }

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Signup/>} /> 
        <Route path='login' element={user ? <Navigate to="/"/> : <Login/>} />
        <Route path='signup' element={user ? <Navigate to="/login"/> : <Signup/>} />
      </Routes>
    </Router >
  );

}

export default App;
