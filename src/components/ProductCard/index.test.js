import React from "react";
import ProductCard from "./index";

describe("ProductCard Component", () => {
    it("renders and create snapshot <ProductCard />", () => {
        expect(
            toJson(
                <ProductCard
                    date="Thu May 28 2020 05:50:51 
                    GMT+0700 (Western Indonesia Time)"
                    face="( `·´ )"
                    price={200}
                    size="20"
                    isAds={false}
                ></ProductCard>,
            ),
        ).toMatchSnapshot();
    });
    it("renders shallow is success <ProductCard />", () => {
        expect(
            shallow(
                <ProductCard
                    date="Thu May 28 2020 05:50:51 
                    GMT+0700 (Western Indonesia Time)"
                    face="( `·´ )"
                    price={200}
                    size="20"
                    isAds={false}
                ></ProductCard>,
            ).exists(),
        ).toBe(true);
    });

    it("check face <ProductCard />", () => {
        const component = shallow(
            <ProductCard
                date="Thu May 28 2020 05:50:51 
                GMT+0700 (Western Indonesia Time)"
                face="( `·´ )"
                price={200}
                size="20"
                isAds={false}
            ></ProductCard>,
        );
        expect(component.find(".product__card--face").text()).toEqual(
            "( `·´ )",
        );
    });
    it("check price <ProductCard />", () => {
        const component = shallow(
            <ProductCard
                date="Thu May 28 2020 05:50:51 
                GMT+0700 (Western Indonesia Time)"
                face="( `·´ )"
                price={200}
                size="20"
                isAds={false}
            ></ProductCard>,
        );
        expect(component.find(".product__card--price").text()).toEqual("$0.04");
    });
});
