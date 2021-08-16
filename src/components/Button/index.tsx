import ButtonDefault from './styled'
import React from "react";
import {IProps} from "../../themes/DefaultTheme";

export const Button: React.FC<IProps> = ({children, variant}) => {
    return (
        <ButtonDefault variant={variant}>{children}</ButtonDefault>
    );
}