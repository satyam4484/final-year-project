import { Routes, Route } from "react-router-dom";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import Auth from "../Auth/Auth";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>heom</h1>} />
      <Route path="/jobs" element={<h1>home</h1>} />
      <Route path="/signup" element={<Auth><Signup /></Auth>} />
    </Routes>
  );
};

export default Routing;
