import styled from "styled-components";
import {IProps} from "../../themes/DefaultTheme";

interface IMenuManagement {
    active: boolean
}

export const MenuManagement = styled.div<IProps & IMenuManagement>`
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
  
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
  }
`

export const MenuImage = styled.img`
    z-index: 100;
`

export const MenuDropdownManagement = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const MenuButtonManagement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border-top: 1px solid ${props => props.theme.palette.neutral.grayishBlue};
  
  & button:first-child {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    border: 0;
    justify-content: center;

    & button:first-child {
      margin: 0;
    }
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