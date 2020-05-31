import React from "react";
import {
    HeaderStyle,
    HeaderContainer,
    HeaderBadge,
    HeaderLogo,
} from "./index.style";
// import Button from "../button";
// import Icons from "../icons";

const Header = ({ withBackButton = false }) => {
    return (
        <HeaderStyle>
            <HeaderContainer test-id="header-content">
                <HeaderLogo to="/">POKEMON</HeaderLogo>
            </HeaderContainer>
        </HeaderStyle>
    );
};
export default Header;
