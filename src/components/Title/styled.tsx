import styled from "styled-components";
import {IProps, VARIANT} from "../../themes/DefaultTheme";

export const TitleManagment = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & .invisible {
    display: none;
  }
  
  & .primary {
    color: ${props => props.theme.palette.neutral.grayishBlue};
  }
  
  & .secondary {
    color: ${props => props.theme.palette.neutral.white};
  }
`

const TitleDefault = styled.h1<IProps>`
    width: 80vw;
    margin-bottom: 10px;
`

export const SubTitle = styled.p<IProps>`
  margin-top: 10px;
  width: 80vw;
`

export default TitleDefault