import React, {ReactElement} from "react";
import TitleDefault, {SubTitle, TitleManagment} from "./styled";
import {VARIANT} from "../../themes/DefaultTheme";

interface ITitle {
    subtitle?: ReactElement|string,
    variant?: VARIANT
}

const Title: React.FC<ITitle> = ({children, subtitle}) => {
    return (
        <TitleManagment variant={VARIANT.SECONDARY}>
            <TitleDefault>{children}</TitleDefault>
            {subtitle && <SubTitle variant={VARIANT.PRIMARY} >{subtitle}</SubTitle>}
        </TitleManagment>
    );
}

export default Title;