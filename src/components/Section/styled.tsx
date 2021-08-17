import styled from "styled-components";
import {IProps, VARIANT} from "../../themes/DefaultTheme";

interface ISectionDefault {
    backgroundImage?: ImageData,
    role?: string
}

const SectionDefault = styled.section<ISectionDefault & IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${props => {
      switch (props.variant) {
        case VARIANT.SECONDARY:
            return `
                background-color: ${props.theme.palette.gradient.veryDarkDesaturatedBlue};
                border-radius: 0 4rem 0 4rem;
                position: relative;
                padding: 35vh 0 25vh 0;
                margin-top: 35vh;
                background-image: url(${props.backgroundImage});
                background-repeat: no-repeat;
                background-size: 100vw 80vh;
                background-position: top -12rem left 0rem;
            `
      }
  }};
  
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    ${props => {
      switch (props.variant) {
        case VARIANT.PRIMARY:
          return `
          position: relative;
                grid-template-areas: 
        "sectionTitle sectionTitle"
        "sectionContent sectionVoid";
        padding: 10vh 0 25vh 0;
            `
        case VARIANT.SECONDARY:
          return `
                position: relative;
                grid-template-areas: 
        "sectionTitle sectionTitle sectionTitle"
        "sectionVoid sectionContent sectionContent";
                padding: 10vh 0 18vh 0;
                background-size: 60vw 110vh;
                background-position: top -50vh left -10vw;
            `
        case VARIANT.THIRD:
            return `
            position: relative;
                grid-template-areas: 
        "sectionTitle sectionTitle sectionTitle"
        "sectionVoid sectionContent sectionContent";
        padding: 10vh 0 50vh 0;
            `
      }
    }};
  }
`

export const SectionImage = styled.img<IProps>`
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
`

export const SectionContent = styled.div<IProps>`
  filter: none;
  
  & h1 {
    ${props => {
      switch (props.variant) {
        case VARIANT.SECONDARY:
          return `
                color: ${props.theme.palette.neutral.white};
            `;
      }
    }} 
  }
  
  & p {
    ${props => {
      switch (props.variant) {
        case VARIANT.SECONDARY:
          return `
                color: ${props.theme.palette.neutral.grayishBlue};
            `;
      }
    }}
  }
  
  @media (min-width: 992px) {
    & {
      grid-area: sectionContent;
    }

    ${props => {
      switch (props.variant) {
        case VARIANT.PRIMARY:
          return `
                padding-left: 150px;
                padding-right: 120px;
            `
        case VARIANT.SECONDARY:
          return `
                padding-right: 0 80px 0 0;
            `
        case VARIANT.THIRD:
          return `
                padding: 20vh 80px 0 0;
                
            `
      }
    }};
  }
`

export const SectionVoid = styled.div`
  @media (min-width: 992px) {
    grid-area: sectionVoid;
  }
`

export default SectionDefault