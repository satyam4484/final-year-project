import Mynavbar from "./Navbar";
import ThemeColor from "../Themes/ThemeColor";

const Layout = ({ children }) => {
  return (
    <>
      <Mynavbar />
      {children}
    </>
  );
};

export default Layout;
