import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import MyPosts from "./components/MyPosts";
import AllPosts from "./components/AllPosts";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <Router>
    <div className="App min-h-screen px-[1rem] bg-gray-800 text-white">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<AllPosts />} />
            
          <Route exact path="/login" element={<Login />} />
            
          <Route exact path="/register" element={<Register />} />
            
          <Route exact path="/myposts" element={<MyPosts />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
