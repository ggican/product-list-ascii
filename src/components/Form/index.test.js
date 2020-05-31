import React from "react";
import { SelectOption } from "./index";

describe("SelectOption Component", () => {
    it("renders and create snapshot <SelectOptions />", () => {
        expect(
            toJson(
                <SelectOption
                    onGetValue={() => {}}
                    label="Select Options"
                    value="ikhsan"
                    options={[{ value: "ikhsan", label: "ikhsan" }]}
                ></SelectOption>,
            ),
        ).toMatchSnapshot();
    });
    it("renders shallow is success <SelectOption />", () => {
        expect(
            shallow(
                <SelectOption
                    onGetValue={() => {}}
                    label="Select Options"
                    value="ikhsan"
                    options={[{ value: "ikhsan", label: "ikhsan" }]}
                ></SelectOption>,
            ).exists(),
        ).toBe(true);
    });
});
