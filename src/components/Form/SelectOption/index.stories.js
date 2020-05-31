import React from "react";
import SelectOption from "./index";

export default { title: "Form|Select Options", component: SelectOption };

export const SelectOptionDefault = () => {
    const onGetValue = e => {
        console.log(e.target.value);
    };
    return (
        <SelectOption
            onGetValue={onGetValue}
            label="Select Options"
            value="ikhsan"
            options={[{ value: "ikhsan", label: "ikhsan" }]}
        ></SelectOption>
    );
};
