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
import laptopMobile from './assets/images/illustration-laptop-mobile.svg';
import illustrationPhones from './assets/images/illustration-phones.svg';
import Section from "./components/Section";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";
import logo from "./assets/images/logo.svg";
import Dropdown from "./components/Dropdown";

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
                <Paragraph>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos an Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</Paragraph>
                <Title variant={VARIANT.SECONDARY}>Robust Content Management</Title>
                <Paragraph>Flexible content management enables users to easily move though posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</Paragraph>
            </Section>
            <Section image={illustrationPhones} backgroundImage={sectionBackgroundImage}  variant={VARIANT.SECONDARY}>
                <Title>State of the Art Infrastructure</Title>
                <Paragraph>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</Paragraph>
            </Section>
            <Section image={laptopMobile} backgroundImage={sectionBackgroundImage}>
                <Title>Free, Open, Simple</Title>
                <Paragraph>Blogr is a free and open source application backed by a large community of helpful developers. It supports feture such as code syntax highlighting, RSS feeds, social media integration, third-party commeting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</Paragraph>
                <Title>Powerful tooling</Title>
                <Paragraph>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</Paragraph>
            </Section>
            <Footer>
                <img src={logo} alt="Logo of the project Blogr Landing Page"/>
                <Dropdown title="Product" contents={["Overview", "Pricing", "Marketplace", "Features", "Integrations"]} />
                <Dropdown title="Company" contents={["About", "Team", "Blog", "Careers"]} />
                <Dropdown title="Connect" contents={["Contact", "Newsletter", "LinkedIn"]} />
            </Footer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
