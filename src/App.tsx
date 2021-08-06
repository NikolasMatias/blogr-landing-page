import React, {useState} from 'react';
import './App.css';
import styled, {ThemeProvider} from "styled-components";
import {defaultTheme} from "./themes/DefaultTheme";
import Button from "./components/Button";

enum VARIANT {
    PRIMARY,
    SECONDARY
}
interface IProps {
    variant?: VARIANT
}

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
    const [theme, setTheme] = useState(defaultTheme);
    const updateTheme = () => {

    }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Button variant={VARIANT.SECONDARY}>Teste</Button>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
