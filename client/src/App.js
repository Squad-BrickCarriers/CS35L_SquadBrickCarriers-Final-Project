import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Ranking from "./pages/ranking/ranking";

function App() {
  // Get router ready so that we don't have to comment out things
  //!Notice the format update of React Router V6

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
