import styled from "styled-components";

const ParagraphDefault = styled.p`
    font-family: ${props => props.theme.typography.secondary.family};
    width: 80vw;
    text-align: center;
    color: ${props => props.theme.palette.neutral.veryDarkGrayishBlue};
`

export default ParagraphDefault;