# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Mobile
![Front-end Mobile 01](./src/assets/readme-images/blogr-mobile%2001.png)
![Front-end Mobile 02](./src/assets/readme-images/blogr-mobile%2002.png)
![Front-end Mobile 03](./src/assets/readme-images/blogr-mobile%2003.png)
![Front-end Mobile 04](./src/assets/readme-images/blogr-mobile%2004.png)
![Front-end Mobile 05](./src/assets/readme-images/blogr-mobile%2005.png)
![Front-end Mobile 06](./src/assets/readme-images/blogr-mobile%2006.png)
![Front-end Mobile 07](./src/assets/readme-images/blogr-mobile%2007.png)

#### Web

![Front-end Web 01](./src/assets/readme-images/blogr-desktop%2001.png)
![Front-end Web 02](./src/assets/readme-images/blogr-desktop%2002.png)
![Front-end Web 03](./src/assets/readme-images/blogr-desktop%2003.png)
![Front-end Web 04](./src/assets/readme-images/blogr-desktop%2004.png)
![Front-end Web 05](./src/assets/readme-images/blogr-desktop%2005.png)

### Links

- Solution URL: [Not ready](https://your-solution-url.com)
- Live Site URL: [Link](https://blogr-landing-page-delta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Probably the main thing I have learned from this project is how to use Styled Components. 
I don't know if I used them in the right way, or how I could improve but I will try my best to code better projects in the future.

Well I did somethings I never did before in this project. I've studied to create a good way to deal with themes in this project.
And even if it will not apply totally for what I did here, at least it will be a bridge for my next 2 projects I'm planning to
do here on FrontendMentor.

So the structure are not that complex. I have a themes folder where I have the DefaultTheme,
and th GlobalStyles. They are the bases of it just like the ThemeProvider in the App.tsx
are too.

This three are the bases of everything. All of the other contents who are using the theme
are getting this information from DefaultTheme.

Now the others structures I created are by context. Cause the Styled Components are inside 
the components folder and every single component will have an index.tsx and a styled.tsx.
- **index.tsx**: This file is for organize the Styled Components and use the React hooks if necessary.
- **styled.tsx**: Now this one is where I create the Styled Components that will be used for the index.tsx. In thi case I create as much as necessary.


Besides the architecture, I have a lot of good things to talk about when it comes to the css part.

I'm really proud about how I've handled the Menu. I was able to create the whole design
without needing to create unnecessary tags to separete the "fixed" version of the normal desktop dropdown version.

Since my code is Mobile First, I will put the "fixed" option outside any @media but I will still use an "active" boolean who will
change only it is really activated. In this case It's simple, just click in the icon hamburger.

Here the code:
```css
display:none;
  
    @media (max-width: 991px) {
      ${props => {
          if (props.active) {
              return `
                display: flex;
                flex-direction: column;
                align-items: center;
                position: fixed;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%);
                min-width: 90vw;
                min-height: 80vh;
                background-color: ${props.theme.palette.neutral.white};
                color: ${props.theme.palette.neutral.veryDarkBlackBlue};
              `
          }
      }
    }
    };
  
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
  }
```

As you can see it was a simple solution.

Another thing I would like to talk about to is the Sections. Unfortunately I was not able to make it better in css. I'm still thinking
in other ways to make it more readable and less... bad. But I'm out of ideas, I'm accepting sugestions.

I used React again to change the images side. In some cases it is in the right side of the section and in other cases it's in the left side.
But... I did it using absolute too, as you can see in the code bellow: 

```css
  max-width: 100%;
filter: none;

${props => {
      switch (props.variant) {
        case VARIANT.SECONDARY:
            return `
                position: absolute;
                max-width: 100vw;
                min-height: 10vh;
                right: 0;
                left: 0;
                top: -30vh;
            `
      }
}};

@media (min-width: 992px) {
& {
  grid-area: sectionImage;
}

  ${props => {
      switch (props.variant) {
        case VARIANT.PRIMARY:
          return `
                position: absolute;
                min-width: 40vw;
                min-height: 10vh;
                right: -14vw;
                top: 10vh;
            `
        case VARIANT.SECONDARY:
          return `
                position: absolute;
                max-width: 50vw;
                min-height: 10vh;
                left: 10vw;
                top: -10vh;
            `
        case VARIANT.THIRD:
            return `
                position: absolute;
                min-width: 40vw;
                min-height: 10vh;
                left: -14vw;
                top: 5vh;
            `
      }
}};
}
```

As you can see, again I'm using React in css, and even if it's good for me cause it helped me a lot to do what I wanted. But at the same
time I feel like I should do it without React. Cause in other situations I will not have React to work in my projects, so what?
I cannot stop just cause of it. I need to improve more and more.


There's a lot I did in this project but I think it's the best things I could say here.

### Continued development

I want to continue to focus my studies in Styled Components, but I still want to use more css than react to code the styles.

### Useful resources

- [Theming and Theme Switching with React and styled-components](https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/) - I'm trying to find out a good way to handle themes in react using Styled Components. But in this case it didn't work. Cause this solution is for people who wanna code using javascript. In my case I'm using typescript. But it was a good try at least.
- [Theme with styled-components and Typescript](https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3) - In this case this solution worked a lot. I'm still trying to figure out how is the best way to organize the informations of Themes and I'm sure it would not be solved only in this project but It's a start.
- [CSS Grid: Simplificando layouts](https://www.alura.com.br/conteudo/css-grid-layout?gclid=CjwKCAjw092IBhAwEiwAxR1lRpxK48dADm0B6iPqVyda7e8B_T3QXO4gV3sR4CPZsoGKxS6h8ztCWBoCKBwQAvD_BwE) - I needed to remember how I could use "grid-template-areas" and this link helped me a lot with it.
- [How to get the width of the window in React.js](https://www.jsdiaries.com/how-to-get-the-width-of-the-window-in-react-js/): I used it to remember how could I create a useState that get the width of the window everytime it change. So this way I can change the image of the sections.

## Author

- Frontend Mentor - [@NikolasMatias](https://www.frontendmentor.io/profile/NikolasMatias)
- LinkedIn - [@nikolas-matias-xavier-morais-180831a2](https://www.linkedin.com/in/nikolas-matias-xavier-morais-180831a2/)

## Acknowledgments

One of my best friends called [Tiago Damascena](https://github.com/TiagoDamascena) gave me some advices after all of it. He helped me a lot in this project.