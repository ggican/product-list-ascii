import React from "react";
import StyleProductCard from "./index.style";
import convertSenToUsDollar from "../../utils/convertSenToUsDollar";
import convertDateToTimeSince from "../../utils/convertDateToTimeSince";
import ProductCardLoading from "./index.loading";

const ProductCard = ({
    date = "Thu May 28 2020 05:50:51 GMT+0700 (Western Indonesia Time)",
    face = "( `·´ )",
    price = 0,
    size = 0,
}) => {
    return (
        <StyleProductCard size={size}>
            <div className="product__card--top">
                <div className="product__card--face">{face}</div>
            </div>
            <div className="product__card--bottom">
                <span className="product__card--date">
                    {convertDateToTimeSince(date)}
                </span>
                <span className="product__card--price">
                    {convertSenToUsDollar(price)}
                </span>
                <span className="product__card--size"> {`Size ${size}`}</span>
            </div>
        </StyleProductCard>
    );
};

ProductCard.Loading = ProductCardLoading;
export default ProductCard;
