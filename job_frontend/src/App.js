import CssBaseline from "@mui/material/CssBaseline";
import {useTheme} from "@mui/material/styles";
import {IconButton} from "@mui/material";
import {useGlobalContext } from "./context";
import Theme from "./Components/Theme";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const App = () => {
  const { theme, toggleTheme } = useGlobalContext();
    const themeType = useTheme();

  return (
    <Theme>
      <CssBaseline />
      <h2>hello satyam</h2>
      <div className="theme__icon">
        <IconButton onClick={() => toggleTheme()} color="inherit" >
            {themeType.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      
    </Theme>
  );
};

export default App;
