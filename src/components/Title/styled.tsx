import styled from "styled-components";

export const TitleManagment = styled.div`
  color: ${props => props.theme.palette.neutral.white};
  width: 100%;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & .invisible {
    display: none;
  }
`

const TitleDefault = styled.h1`
    width: 80vw;
    margin-bottom: 10px;
`

export const SubTitle = styled.p`
  margin-top: 10px;
  width: 80vw;
`

export default TitleDefault