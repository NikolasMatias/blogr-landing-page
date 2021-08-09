import MenuDefault, {MenuButtonManagement, MenuDropdownManagement, MenuImage, MenuManagement} from "./styled";
import logo from '../../assets/images/logo.svg';
import IconHamburger from '../../assets/images/icon-hamburger.svg';
import IconClose from '../../assets/images/icon-close.svg';
import React, {useState} from "react";
import Dropdown from "../Dropdown";
import {VARIANT} from "../../themes/DefaultTheme";
import {Button} from "../Button";

const Menu = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <MenuDefault>
            <img src={logo} alt="Logo of the project Blogr Landing Page" className="logo"/>
            <MenuManagement active={active}>
                <MenuDropdownManagement>
                    <Dropdown title="Product" variant={VARIANT.PRIMARY} contents={["Overview", "Pricing", "Marketplace", "Features", "Integrations"]} />
                    <Dropdown title="Company" variant={VARIANT.PRIMARY} contents={["About", "Team", "Blog", "Careers"]} />
                    <Dropdown title="Connect" variant={VARIANT.PRIMARY} contents={["Contact", "Newsletter", "LinkedIn"]} />
                </MenuDropdownManagement>
                <MenuButtonManagement>
                    <Button variant={VARIANT.THIRD}>Login</Button>
                    <Button variant={VARIANT.FOURTH}>Sign up</Button>
                </MenuButtonManagement>
            </MenuManagement>
            <MenuImage src={active ? IconClose : IconHamburger} alt="Button of Menu" onClick={() => setActive(!active)} className="icon-hamburger"/>
        </MenuDefault>
    );
}

export default Menu