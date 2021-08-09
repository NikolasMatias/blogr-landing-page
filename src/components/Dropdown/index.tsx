import React, {useState} from "react";
import DropdownDefault, {DropdownContent, DropdownContentManagement, DropDownTitle} from "./styled";
import {IProps} from "../../themes/DefaultTheme";

interface IDropdown {
    title: string,
    contents: string[]
}

const Dropdown: React.FC<IDropdown & IProps> = ({title, contents, variant}) => {
    const [activeContent, setActiveContent] = useState<boolean>(false);

    return (
        <DropdownDefault variant={variant}>
            <DropDownTitle variant={variant} active={activeContent} onClick={() => setActiveContent(!activeContent)}>{title}</DropDownTitle>
            <DropdownContentManagement variant={variant} active={activeContent}>
                {contents.map((content, index) => (
                    <DropdownContent key={index} variant={variant} active={activeContent}>{content}</DropdownContent>
                ))}
            </DropdownContentManagement>
        </DropdownDefault>
    );
}

export default Dropdown