import styled from 'styled-components'

const FooterDefault = styled.footer`
  min-height: 90vh;
  max-width: 100vw;
  background-color: ${props => props.theme.palette.neutral.veryDarkBlackBlue};
  color: ${props => props.theme.palette.neutral.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vh 10vw 10vh 10vw;
  border-radius: 0 4rem 0 0;
  text-align: center;
  
  & > div {
    margin-top: 3rem;
  }
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 0;
    max-height: 25vh;
    
    & > div {
      margin: 0;
    }
  }
`

export default FooterDefault