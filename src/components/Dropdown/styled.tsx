import styled from 'styled-components'
import {IProps, VARIANT} from "../../themes/DefaultTheme";
import iconArrowDark from '../../assets/images/icon-arrow-dark.svg';
import iconArrowLight from '../../assets/images/icon-arrow-light.svg';

export const DropDownTitle = styled.h2<IProps>`
  position: relative;
  
  &::before {
    ${props => {
      switch (props.variant) {
        case VARIANT.PRIMARY:
          return `
                content: '';
                position: absolute;
                top: 40%;
                right: 23%;
                height: 10px;
                width: 20px;
                background-image: url(${iconArrowDark});
                background-repeat: no-repeat;
                background-size: .75rem;
              `
      }
    }}
    
    ${props => {
      if (props.active)
        return `
            transform: rotate(180deg);
        `
      return ``
    }
  }
`

interface IDropdownContentManagment {
    active: boolean
}

export const DropdownContentManagment = styled.div<IProps & IDropdownContentManagment>`
    ${props => {
      switch (props.variant) {
          case VARIANT.PRIMARY:
            if (props.active)
              return `
                display: block;
                background-color: ${props.theme.palette.neutral.grayishBlue};
                color: ${props.theme.palette.neutral.veryDarkGrayishBlue};
                padding: 1rem 0;
                font-size: 1.2rem;
            `
              
              return `
                display: none;
              `
        }
    }}
`

interface IDropdownContent {
    active: boolean
}

export const DropdownContent = styled.p<IProps & IDropdownContent>`
    color: ${props => props.theme.palette.neutral.grayishBlue};

  ${props => {
    switch (props.variant) {
      case VARIANT.PRIMARY:
        if (props.active)
          return `
                color: ${props.theme.palette.neutral.veryDarkGrayishBlue} !important;
                text-align: center;
                
            `

        return ``
    }
  }}
`

const DropdownDefault = styled.div<IProps>`
  ${props => {
    switch (props.variant) {
      case VARIANT.PRIMARY:
        return `
                width: 90%;
                text-align: center;
              `
    }
  }}
`

export default DropdownDefault;