import { lazy,Suspense } from "react";

import { Routes, Route } from "react-router-dom";
// import Signup from 
// import Login from 
// import Auth from "../Auth/Auth";
// import Profile from "../../pages/Profile";
// import Protected from "./Protected";
import { Spinner } from "react-bootstrap";
import { useGlobalContext } from "../../context";

const Signup = lazy(() => import("../Auth/Signup"));
const Login = lazy(() => import("../Auth/Login"));
const Auth = lazy(() => import("../Auth/Auth"));
const Profile = lazy(() => import("../../pages/Profile"));
const Protected = lazy(() => import("./Protected"));

const Routing = () => {
  const {isloggedin} = useGlobalContext();
  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/signup" element={<Auth><Signup /></Auth>} />
        <Route path="/login" element={<Auth><Login /></Auth>} />
        {isloggedin &&<Route path="/profile/:user" element={<Protected isLoggedIn={isloggedin}><Profile /> </Protected>} />}
      </Routes>
    </Suspense>
  );
};

export default Routing;
