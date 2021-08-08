import styled from "styled-components";

interface ISectionImage {
    backgroundImage?: ImageData
}

const SectionDefault = styled.section`
  max-width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SectionImage = styled.img<ISectionImage>`
  max-width: 100%;
`

export const SectionContent = styled.div`

`

export default SectionDefault