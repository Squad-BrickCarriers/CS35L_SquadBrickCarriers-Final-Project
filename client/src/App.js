import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Ranking from "./pages/ranking/ranking";

function App() {
  // Get router ready so that we don't have to comment out things
  //!Notice the format update of React Router V6
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
        <Route path='/' element={<Home />} /> 
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='ranking' element={<Ranking />} />
      </Routes>
    </Router >
  );

}

export default App;
