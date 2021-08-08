import React from "react";
import DropdownDefault, {DropdownContent, DropdownContentManagment, DropDownTitle} from "./styled";

interface IDropdown {
    title: string,
    contents: string[]
}

const Dropdown: React.FC<IDropdown> = ({title, contents}) => {
    return (
        <DropdownDefault>
            <DropDownTitle>{title}</DropDownTitle>
            <DropdownContentManagment>
                {contents.map((content, index) => (
                    <DropdownContent key={index}>{content}</DropdownContent>
                ))}
            </DropdownContentManagment>
        </DropdownDefault>
    );
}

export default Dropdown