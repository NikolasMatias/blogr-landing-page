import React from "react";
import SectionDefault, {SectionContent, SectionImage} from "./styled";
import Title from "../Title";

interface ISection {
    title?: string,
    image: any,
    backgroundImage: any
}

const Section: React.FC<ISection> = ({children, title, image, backgroundImage}) => {
    return (
        <SectionDefault>
            {title && <Title>{title}</Title>}
            <SectionImage src={image} backgroundImage={backgroundImage}/>
            <SectionContent>{children}</SectionContent>
        </SectionDefault>
    );
}

export default Section;