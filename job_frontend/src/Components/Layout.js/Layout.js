import Mynavbar from "./Navbar";
import Routing from "./Routing";
import ThemeColor from "../Themes/ThemeColor";

const Layout = ({ children }) => {
  return (
    <>
      <Mynavbar />
      {children}
      <Routing/>
    </>
  );
};

export default Layout;
