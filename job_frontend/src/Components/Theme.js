import { useMemo } from "react";
import { useGlobalContext } from "../context";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Theme = ({ children }) => {
  const { theme } = useGlobalContext();

  const myTheme = useMemo(() =>
    createTheme({
      palette: {
        mode: theme,
      },
    }),
    [theme]
  );

  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};
export default Theme;
