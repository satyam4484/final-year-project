import { useGlobalContext } from "./context";
import { updateUser } from "./network/agent.js";
import Mynavbar from "./Components/Layout/Navbar";
import Routing from "./Components/Layout/Routing";
import { Container,Row } from "react-bootstrap";

const App = () => {
  // updateUser({email:'aa@gmail.com',firstName:"ssjsns",lastName:"si"});
  return (
    <>
      <Mynavbar />
      <Container>
        <Row className="justify-content-center">
          <Routing />
        </Row>
      </Container>
    </>
  );
};

export default App;
