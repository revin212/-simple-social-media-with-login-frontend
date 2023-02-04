import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import MyPosts from "./components/MyPosts";
import AllPosts from "./components/AllPosts";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { useState } from "react";
import NotFound from "./components/404.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
    <div className="App min-h-screen px-[1rem] bg-gray-800 text-white">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        <Routes>
          <Route exact path="/" element={<AllPosts loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="*" element={<NotFound />} />            
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login"
          element={
          
            (!loggedIn) ? 
              <Login setLoggedIn={setLoggedIn} />
             : 
              <Navigate to={{ pathname: '/', state: { from: '/login' } }} />
          }
          />
          <Route exact path="/myposts"
          element={
          
            loggedIn ? 
              <MyPosts loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
             : 
              <Navigate to={{ pathname: '/login', state: { from: '/myposts' } }} />
          }
          />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
