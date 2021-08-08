import styled from "styled-components";

const MenuDefault = styled.div`
  width: 100%;
  min-height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.palette.neutral.white};
  
  & .icon-hamburger {
    min-width: 2.5rem;
    
    @media (min-width: 960px) {
      display: none;
    }
  }
`

export default MenuDefault