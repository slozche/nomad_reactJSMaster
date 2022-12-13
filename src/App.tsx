import Router from "./components/Router";
import reset from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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

const Body = styled.section`
  height: calc(100vh - 80px);
  padding-top: 80px;
  padding-left: 240px;
  display: flex;
`;

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header setIsDark={setIsDark} />
      <Body>
        <Sidebar />
        <Router />
      </Body>
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default App;
