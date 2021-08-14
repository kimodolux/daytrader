import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";


export const Theme = createTheme({
    palette: {
        primary: {
            contrastText: "#FFFFFF",
            main: "#651fff",
            dark: "#0100ca",
            light: "#a255ff"
          },
          secondary: {
            contrastText: "#000000",
            main: "#9e9e9e",
            dark: "#707070",
            light: "#cfcfcf"
          }
      },
      typography: {
        fontFamily: "'Roboto', sans-serif"
      }
});

type Props = {
    children?: React.ReactNode;
  };

  const ThemeProvider = ({ children }: Props) => (
    <StyledThemeProvider
      theme={Theme}
    >
      <MuiThemeProvider theme={Theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          {children}
        </StylesProvider>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
  
  
  export default ThemeProvider;