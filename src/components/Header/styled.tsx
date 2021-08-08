import styled from 'styled-components';
import bgPatternIntro from '../../assets/images/bg-pattern-intro.svg';

const HeaderDefault = styled.header`
  z-index: 0;
  min-height: 90vh;
  max-width: 100vh;
  padding: 20px 10px 20px 10px;
  background-image: url(${props => bgPatternIntro}), linear-gradient(to top left, ${props => props.theme.palette.gradient.lightRed}, ${props => props.theme.palette.gradient.veryLightRed});
  background-repeat: no-repeat, no-repeat;
  background-size: 75rem 82rem, 100%;
  background-position: bottom -30rem left -18rem, top left;
  border-radius: 0 0 0 50px;
  position: relative;
`

export default HeaderDefault