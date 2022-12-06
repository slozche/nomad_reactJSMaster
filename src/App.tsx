import Router from "./components/Router";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import MetaHelmet from "./components/Helmet";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a{
    color: inherit;
    text-decoration:none;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MetaHelmet />
      <button
        onClick={() => {
          setIsDark((prev) => !prev);
          console.log(isDark);
        }}
      >
        Dark?
      </button>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default App;
