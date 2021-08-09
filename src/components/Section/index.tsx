import React from "react";
import SectionDefault, {SectionContent, SectionImage} from "./styled";
import Title from "../Title";
import {IProps} from "../../themes/DefaultTheme";

interface ISection {
    title?: string,
    image: any,
    backgroundImage: any
}

const Section: React.FC<ISection & IProps> = ({children, title, image, backgroundImage, variant}) => {
    return (
        <SectionDefault variant={variant} backgroundImage={backgroundImage}>
            {title && <Title grid={true}>{title}</Title>}
            <SectionImage src={image} variant={variant}/>
            <SectionContent variant={variant}>{children}</SectionContent>
        </SectionDefault>
    );
}

export default Section;