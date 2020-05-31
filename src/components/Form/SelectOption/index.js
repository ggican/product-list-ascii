import React from "react";
import StyleSelectOption from "./index.style";

const SelectOption = ({
    onGetValue = () => {},
    value = "",
    options = [],
    label = "",
}) => {
    return (
        <StyleSelectOption>
            <label htmlFor="sort">{label}</label>
            <select
                onChange={onGetValue}
                defaultValue={value}
                name="sort"
                id="sort"
            >
                {options.length > 0 &&
                    options.map((item, key) => {
                        return (
                            <option key={key} value={item.value}>
                                {item.label}
                            </option>
                        );
                    })}
            </select>
        </StyleSelectOption>
    );
};

export default SelectOption;
