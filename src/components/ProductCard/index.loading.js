import React from "react";
import Skeleton from "../Skeleton";
import StyleProductCard from "./index.style";

const ProductCardLoading = () => {
    return (
        <StyleProductCard>
            <div className="product__card--top">
                <Skeleton height="100" width="100%"></Skeleton>
            </div>
            <div className="product__card--bottom">
                <div className="product__card--date">
                    <Skeleton height="7px" width="60%"></Skeleton>
                </div>
                <div className="product__card--price">
                    <Skeleton height="7px" width="30%"></Skeleton>
                </div>
                <div className="product__card--size">
                    <Skeleton height="7px" width="40%"></Skeleton>
                </div>
            </div>
        </StyleProductCard>
    );
};

export default ProductCardLoading;
