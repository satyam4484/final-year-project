import { useGlobalContext } from "./context";
import {getToken,getUser} from "./network/agent.js";

import Layout from "./Components/Layout.js/Layout";

const App = () => {
  return (
    <Layout>
      <h1 className="text-danger">hello satyam</h1>
    </Layout>
  );
};

export default App;

