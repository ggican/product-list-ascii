import React from "react";
import Header from "../components/Header";
import BodyContent from "../components/BodyContent";

import StyleLayouts from "./index.style";
const Layouts = ({
    children,
    style = { header: { withBackButton: false } },
}) => {
    return (
        <StyleLayouts>
            <BodyContent noPadding={!style?.header}>
                <Header {...style.header}></Header>
                {children}
            </BodyContent>
        </StyleLayouts>
    );
};

export default Layouts;
