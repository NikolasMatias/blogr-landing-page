import React, {ReactElement} from "react";
import TitleDefault, {SubTitle, TitleManagment} from "./styled";
import {VARIANT} from "../../themes/DefaultTheme";

interface ITitle {
    subtitle: ReactElement
}

const Title: React.FC<ITitle> = ({children, subtitle}) => {
    return (
        <TitleManagment>
            <TitleDefault variant={VARIANT.PRIMARY}>{children}</TitleDefault>
            <SubTitle variant={VARIANT.PRIMARY} className={!subtitle ? 'invisible' : ''}>{subtitle}</SubTitle>
        </TitleManagment>
    );
}

export default Title;