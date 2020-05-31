import React from "react";
import { HeaderStyle, HeaderContainer, HeaderLogo } from "./index.style";

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderContainer test-id="header-content">
                <HeaderLogo to="/">Product List</HeaderLogo>
            </HeaderContainer>
        </HeaderStyle>
    );
};
export default Header;
