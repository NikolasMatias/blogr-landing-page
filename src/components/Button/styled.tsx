import styled from 'styled-components';
import {IProps, VARIANT} from "../../themes/DefaultTheme";

export const ButtonManagement = styled.div<IProps>`
  display: flex;
  margin-top: 10vh;
  
  @media (min-width: 992px) {
    margin: 2vh 0 15vh 0;
    min-width: 100vw;
    flex-direction: row;
    justify-content: center;
  }
`

const ButtonDefault = styled.button<IProps>`
  padding: 0.5rem 1.2rem .5rem 1.2rem;
  margin: 0 0 0 15px;
  border-radius: 20px;
  cursor: pointer;
  font-family: ${props => props.theme.typography.main.family};
  font-weight: ${props => props.theme.typography.main.weights[1]};
  font-size: 1.2rem;
  
  ${props => {
    switch (props.variant) {
      case VARIANT.FOURTH:
          return `
            color: ${props.theme.palette.neutral.white};
            background-color: ${props.theme.palette.gradient.veryLightRed};
            border: 1px solid ${props.theme.palette.neutral.white};
          `
      case VARIANT.THIRD:
          return `
            color: ${props.theme.palette.neutral.veryDarkBlackBlue};
            background-color: transparent;
            border: none;
          `
        case VARIANT.SECONDARY:
            return `
          color: ${props.theme.palette.neutral.white};
          background-color: transparent;
          border: 1px solid ${props.theme.palette.neutral.white};
        `;
        case VARIANT.PRIMARY:
        default:
            return `
          color: ${props.theme.palette.primary.lightRed};
          background-color: ${props.theme.palette.neutral.white};
          border: 1px solid ${props.theme.palette.neutral.white};
        `;
    }
}}
  
  &:hover {
    ${props => {
      switch (props.variant) {
        case VARIANT.SECONDARY:
          return `
          color: ${props.theme.palette.primary.lightRed};
          background-color: ${props.theme.palette.neutral.white};
          border: 1px solid ${props.theme.palette.neutral.white};
        `;
        case VARIANT.PRIMARY:
        default:
          return `
          color: ${props.theme.palette.neutral.white};
          background-color: ${props.theme.palette.gradient.veryLightRed};
          border: 1px solid ${props.theme.palette.neutral.white};
        `;
      }
    }}  
  }
  
  @media (min-width: 992px) {
    ${props => {
        switch (props.variant) {
          case VARIANT.THIRD:
              return `color: ${props.theme.palette.neutral.white};`
          case VARIANT.FOURTH:
              return `
                color: ${props.theme.palette.gradient.veryLightRed};
                background-color: ${props.theme.palette.neutral.white};
              `
        }
    }
  }
`;

export default ButtonDefault;