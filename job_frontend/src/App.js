import Mynavbar from "./Components/Layout/Navbar";
import Routing from "./Components/Layout/Routing";
import { Container,Row } from "react-bootstrap";
import Messages from "./Components/UI/Messages";
import Spinner from "./Components/UI/Spinner";
import { useGlobalContext } from "./context";

const App = () => {
  // updateUser({email:'aa@gmail.com',firstName:"ssjsns",lastName:"si"});
  const {isLoading,error} = useGlobalContext();
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
