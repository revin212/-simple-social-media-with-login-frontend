import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MyPosts from "./components/MyPosts";
import AllPosts from "./components/AllPosts";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
    <div className="App min-h-screen px-[1rem] bg-gray-800 text-white">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        <Routes>
          <Route exact path="/" element={<AllPosts loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            
          <Route exact path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            
          <Route exact path="/register" element={<Register />} />
            
          <Route exact path="/myposts" element={<MyPosts loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
