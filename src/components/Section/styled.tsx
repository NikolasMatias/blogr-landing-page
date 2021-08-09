import styled from "styled-components";
import {IProps, VARIANT} from "../../themes/DefaultTheme";

interface ISectionDefault {
    backgroundImage?: ImageData
}

const SectionDefault = styled.section<ISectionDefault & IProps>`
  max-width: 100%;
  margin-top: 5vh;
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
      grid-template-columns: 10fr 1fr;
      grid-template-rows: 50px 300px;
    }
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
  }}
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
`

export default SectionDefault