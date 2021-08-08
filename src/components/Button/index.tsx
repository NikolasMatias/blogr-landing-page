import ButtonDefault from './styled'
import React from "react";
import {IProps} from "./styled";

export const Button: React.FC<IProps> = ({children, variant}) => {
    return (
        <ButtonDefault variant={variant}>{children}</ButtonDefault>
    );
}