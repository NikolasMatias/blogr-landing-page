import React, {ReactElement} from "react";
import TitleDefault, {SubTitle, TitleManagement} from "./styled";
import {VARIANT} from "../../themes/DefaultTheme";

interface ITitle {
    subtitle?: ReactElement|string,
    variant?: VARIANT
}

const Title: React.FC<ITitle> = ({children, subtitle}) => {
    return (
        <TitleManagement variant={VARIANT.SECONDARY}>
            <TitleDefault>{children}</TitleDefault>
            {subtitle && <SubTitle variant={VARIANT.PRIMARY} >{subtitle}</SubTitle>}
        </TitleManagement>
    );
}

export default Title;