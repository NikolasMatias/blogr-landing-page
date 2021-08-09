import styled from 'styled-components';
import bgPatternIntro from '../../assets/images/bg-pattern-intro.svg';

const HeaderDefault = styled.header`
  z-index: 0;
  min-height: 30vh;
  max-width: 100vw;
  padding: 20px 10px 20px 10px;
  background-image: url(${props => bgPatternIntro}), linear-gradient(to top left, ${props => props.theme.palette.gradient.lightRed}, ${props => props.theme.palette.gradient.veryLightRed});
  background-repeat: no-repeat, no-repeat;
  background-size: 75rem 82rem, 100%;
  background-position: bottom -30rem left -18rem, top left;
  border-radius: 0 0 0 4rem;
  position: relative;

  & :is(h1, p) {
    color: ${props => props.theme.palette.neutral.white};
  }

  & :is(h1) {
    margin-top: 20vh;
  }
  
  @media (min-width: 992px) {
    background-size: 75rem 82rem, 100%;
    background-position: bottom -30rem left -18rem, top left;
    
    & :is(h1) {
      font-size: 3rem;
    }
    
    & :is(p) {
      font-size: 1.1rem;
    }
  }
`

export default HeaderDefault