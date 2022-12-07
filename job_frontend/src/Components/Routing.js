import React,{lazy,Suspense} from 'react'
import { Route,Routes,Outlet } from 'react-router-dom'
import Spinner from './UI/Spinner';
const Signup = lazy(() => import('./Forms/Signup'));
const Login = lazy(() => import('./Forms/Login'));
const Profile = lazy(() => import('../Components/Profiles/Profile'))
const Company = lazy(() => import('./Organizations/Company'));

const Routing = () => {
  return (
    <Suspense fallback = {<Spinner/>}>
        <Routes>
            <Route path='/auth' element = {<Outlet/>}>
                <Route path='signup' element={<Signup/>}/>
                <Route path='login' element={<Login/>}/>
            </Route>
            <Route path='/profile/:user' element={<Profile/>}/>
            <Route path='/company/:user' element={<Company/>}/>    
        </Routes>
    </Suspense>
  )
}


export default Routing;