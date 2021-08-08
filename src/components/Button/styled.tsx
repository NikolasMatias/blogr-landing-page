import styled from 'styled-components';
import {IProps, VARIANT} from "../../themes/DefaultTheme";

export const ButtonManagment = styled.div<IProps>`
  display: flex;
  margin-top: 10vh;
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
`;

export default ButtonDefault;