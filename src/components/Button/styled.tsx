import styled from 'styled-components';
export enum VARIANT {
    PRIMARY,
    SECONDARY
}

export interface IProps {
    variant?: VARIANT
}

const ButtonDefault = styled.button<IProps>`
  padding: 0.5rem 1.2rem .5rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: ${props => props.theme.typography.main.family};
  font-weight: ${props => props.theme.typography.main.weights[1]};
  font-size: ${props => props.theme.typography.fontSizeDefault};
  
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
`;

export default ButtonDefault;