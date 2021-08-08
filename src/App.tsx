import React, {useState} from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import {defaultTheme, VARIANT} from "./themes/DefaultTheme";
import Container from "./components/Container";
import {Button} from "./components/Button";
import {GlobalStyles} from "./themes/GlobalStyles";
import {Header} from "./components/Header";
import Menu from "./components/Menu";
import Title from "./components/Title";
import {ButtonManagment} from "./components/Button/styled";

function App() {
    const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
        <Container>
            <Header>
                <Menu />
                <Title subtitle="Grow your audience and build your online brand">
                    A modern publishing platform
                </Title>
                <ButtonManagment>
                    <Button variant={VARIANT.PRIMARY}>Start for Free</Button>
                    <Button variant={VARIANT.SECONDARY}>Learn More</Button>
                </ButtonManagment>
            </Header>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
