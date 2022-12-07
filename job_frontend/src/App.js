import React,{useEffect} from 'react'
import MyNavbar from "./Components/MyNavbar";
import Routing from './Components/Routing';
import { useGlobalContext } from './context';
import Spinner from './Components/UI/Spinner';
import Messages from './Components/UI/Messages';
import { getUserProfile } from './network/agent';

const App = () => {
  const {isLoading,error,userLogin,setUserProfile,toggleSpin} = useGlobalContext();  
  useEffect(() => {
    toggleSpin();
    if(localStorage.getItem("user")) {
      userLogin(JSON.parse(localStorage.getItem("user")));
      getUserProfile().then(response => setUserProfile(response.data));
    }
    toggleSpin();

  },[])
  return (
    <>
    <MyNavbar/>
    {error.isError && <Messages variant={error.variant} title={error.title} message={error.message}/>}
    {isLoading && <Spinner/>}
    <Routing/>

    </>
  )
}

export default App