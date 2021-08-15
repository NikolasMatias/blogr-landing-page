import React, {useEffect, useState} from "react";
import SectionDefault, {SectionContent, SectionImage, SectionVoid} from "./styled";
import Title from "../Title";
import {IProps} from "../../themes/DefaultTheme";

interface ISection {
    title?: string,
    image: any,
    imageDesktop?: any,
    backgroundImage: any
}

const Section: React.FC<ISection & IProps> = ({children, title, image, backgroundImage, variant, imageDesktop}) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    const handleResize = (e) => {
        setWindowWidth(window.innerWidth);
    };

    return (
        <SectionDefault variant={variant} backgroundImage={backgroundImage}>
            {title && <Title grid={true}>{title}</Title>}
            <SectionImage src={windowWidth < 992 ? image : (imageDesktop ? imageDesktop : image)} variant={variant}/>
            <SectionVoid />
            <SectionContent variant={variant}>{children}</SectionContent>
        </SectionDefault>
    );
}

export default Section;