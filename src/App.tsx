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
import sectionBackgroundImage from './assets/images/bg-pattern-circles.svg'
import editorMobile from './assets/images/illustration-editor-mobile.svg';
import Section from "./components/Section";
import Paragraph from "./components/Paragraph";

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
            <Section title="Designed for the future" image={editorMobile} backgroundImage={sectionBackgroundImage}>
                <Title variant={VARIANT.SECONDARY}>Introducing an extensible editor</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda eum harum in provident ratione soluta! Ad animi corporis dicta excepturi facere iste magni porro, repudiandae sed. Harum, officiis reiciendis?</Paragraph>
                <Title variant={VARIANT.SECONDARY}>Robust Content Management</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at consectetur dolor ducimus explicabo inventore nam praesentium quidem quos voluptatum! Eos et fuga fugit voluptatibus.</Paragraph>
            </Section>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
