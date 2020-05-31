import React from "react";
import ProductCard from "./index";
import defaultImage from "../../static/default-landscape.png";

export default { title: "Components|Product Card", component: ProductCard };

export const ProductCardDefault = () => {
    return (
        <ProductCard
            date="Thu May 28 2020 05:50:51 GMT+0700 (Western Indonesia Time)"
            face="( `·´ )"
            price={200}
            size="20"
            isAds={false}
        ></ProductCard>
    );
};
export const ProductCardLoading = () => {
    return <ProductCard.Loading></ProductCard.Loading>;
};

export const ProductCardAdds = () => {
    return <ProductCard face={defaultImage} isAds></ProductCard>;
};
