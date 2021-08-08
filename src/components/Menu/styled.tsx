import styled from "styled-components";
import {IProps} from "../../themes/DefaultTheme";

interface IMenuManagment {
    active: boolean
}

export const MenuManagment = styled.div<IProps & IMenuManagment>`
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
    }
`

export const MenuImage = styled.img`
    z-index: 100;
`

export const MenuDropdownManagment = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuButtonManagment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border-top: 1px solid ${props => props.theme.palette.neutral.grayishBlue};
  
  & button:first-child {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`

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