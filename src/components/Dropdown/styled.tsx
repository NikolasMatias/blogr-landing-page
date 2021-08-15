import styled from 'styled-components'
import {IProps, VARIANT} from "../../themes/DefaultTheme";
import iconArrowDark from '../../assets/images/icon-arrow-dark.svg';
import iconArrowLight from '../../assets/images/icon-arrow-light.svg';

interface IDropDownTitle {
  active: boolean
}

export const DropDownTitle = styled.h2<IProps & IDropDownTitle>`
  position: relative;
  cursor: pointer;
  
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
    
    @media (min-width: 992px) {
    ${props => {
      switch (props.variant) {
        case VARIANT.PRIMARY:
          return `
                background-image: url(${iconArrowLight});
                right: 5%;
              `
      }
    }}
    }
  }
`

interface IDropdownContentManagement {
    active: boolean
}

export const DropdownContentManagement = styled.div<IProps & IDropdownContentManagement>`
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
  
  @media (min-width: 992px) {
      ${props => {
        switch (props.variant) {
          case VARIANT.PRIMARY:
            if (props.active)
              return `
                    position: absolute;
                    min-width: 10vw;
                    top: 8vh;
                    left: 0vw;
                    margin-radius: 20px;
                    padding: 10px;
                    display: block;
                    background-color: ${props.theme.palette.neutral.white};
                    color: ${props.theme.palette.neutral.veryDarkGrayishBlue};
                `
    
            return `
                    display: none;
                  `
        }
      }}
    }
`

interface IDropdownContent {
    active: boolean
}

export const DropdownContent = styled.p<IProps & IDropdownContent>`
    color: ${props => props.theme.palette.neutral.grayishBlue};
    cursor: pointer;

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
  
  @media (min-width: 992px) {
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
  }
`

const DropdownDefault = styled.div<IProps>`
  position: relative;
  
  ${props => {
    switch (props.variant) {
      case VARIANT.PRIMARY:
        return `
                width: 90%;
                text-align: center;
              `
    }
  }};
  
  @media (min-width: 992px) {
    font-size: .75rem;
    width: 8rem;
  }
`

export default DropdownDefault;