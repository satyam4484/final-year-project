import { Routes, Route } from "react-router-dom";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import Auth from "../Auth/Auth";
import Profile from "../../pages/Profile";
import Protected from "./Protected";
import { useGlobalContext } from "../../context";
const Routing = () => {
  const {isloggedin} = useGlobalContext();
  return (
    <Routes>
      <Route path="/" element={<h1>home page</h1>} />
      <Route path="/signup" element={<Auth><Signup /></Auth>} />
      <Route path="/login" element={<Auth><Login /></Auth>} />
      {isloggedin &&<Route path="/profile" element={
                        <Protected isLoggedIn={isloggedin}>
                          <Profile />
                          </Protected>} />}
    </Routes>
  );
};

export default Routing;
