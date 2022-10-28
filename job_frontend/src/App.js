import { useEffect } from "react";
import Mynavbar from "./Components/Layout/Navbar";
import Routing from "./Components/Layout/Routing";
import { Container,Row } from "react-bootstrap";
import Messages from "./Components/UI/Messages";
import Spinner from "./Components/UI/Spinner";
import { getUserProfile } from "./network/agent";
import { useGlobalContext } from "./context";

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
      <Mynavbar />
      <Container>
        <Row className="justify-content-center">
          {error.isError && <Messages variant={error.variant} title={error.title} message={error.message}/>}
          {isLoading && <Spinner/>}
          <Routing />
        </Row>
      </Container>

    </>
  );
};

export default App;
