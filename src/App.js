import Login from "./components/Login";
import MyPosts from "./components/MyPosts";
import AllPosts from "./components/AllPosts";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App min-h-screen px-[1rem] bg-gray-800 text-white">
        <Navbar />
        <AllPosts />
        <MyPosts />
        <Register />
        <Login />
    </div>
  );
}

export default App;
