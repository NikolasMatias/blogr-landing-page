import React from "react";
import ParagraphDefault from "./styled";

const Paragraph: React.FC = ({children}) => {
    return (
        <ParagraphDefault>{children}</ParagraphDefault>
    );
}

export default Paragraph;