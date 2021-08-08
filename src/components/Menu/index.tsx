import MenuDefault from "./styled";
import logo from '../../assets/images/logo.svg';
import IconHamburger from '../../assets/images/icon-hamburger.svg';
import React from "react";
import {Button} from "../Button";

const Menu = () => {
    return (
        <MenuDefault>
            <img src={logo} alt="Logo of the project Blogr Landing Page" className="logo"/>
            <img src={IconHamburger} alt="Button of Menu" className="icon-hamburger"/>
        </MenuDefault>
    );
}

export default Menu