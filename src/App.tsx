import React, {useState} from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./themes/DefaultTheme";
import Container from "./components/Container";
import {Button} from "./components/Button";
import {VARIANT} from "./components/Button/styled";
import {GlobalStyles} from "./themes/GlobalStyles";
import {Header} from "./components/Header";

function App() {
    const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
        <Container>
            <Header>
                <img src={logo} alt="Logo of the project Blogr Landing Page"/>
                <h1>Teste 2</h1>
                <Button variant={VARIANT.PRIMARY}>Start for Free</Button>
                <Button variant={VARIANT.SECONDARY}>Learn More</Button>
            </Header>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
