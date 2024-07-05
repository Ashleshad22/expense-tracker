import Signup from "./Signup.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Landing from "./Landing.jsx";
import Page404 from "./Page404.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container mx-auto">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
