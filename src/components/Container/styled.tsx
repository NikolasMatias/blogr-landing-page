import styled from "styled-components";

export const ContainerDefault = styled.div`
  background-color: ${props => props.theme.palette.neutral.white};
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;