import React from "react";
import PropTypes from "prop-types";

import ProductCardLoading from "./index.loading";
import StyleProductCard from "./index.style";

import convertSenToUsDollar from "../../utils/convertSenToUsDollar";
import convertDateToTimeSince from "../../utils/convertDateToTimeSince";

const ProductCard = ({
    date = "-",
    face = "-",
    price = 0,
    size = "23",
    isAds = false,
}) => {
    return (
        <StyleProductCard size={size}>
            <div className="product__card--top">
                {!isAds ? (
                    <div className="product__card--face">
                        {face !== "-" && face}
                    </div>
                ) : (
                    <div
                        className="product__card--face 
                    product__card--face-ads"
                    >
                        <img src={face} alt="" />
                    </div>
                )}
            </div>

            {!isAds ? (
                <div className="product__card--bottom">
                    <span className="product__card--date">
                        {date !== "-" && convertDateToTimeSince(date)}
                    </span>
                    <span className="product__card--price">
                        {convertSenToUsDollar(price)}
                    </span>
                    <span className="product__card--size">
                        {`Size ${size}`}
                    </span>
                </div>
            ) : (
                <div className="product__card--bottom">
                    <span className="product__card--date">Adverstiment</span>
                </div>
            )}
        </StyleProductCard>
    );
};

ProductCard.Loading = ProductCardLoading;

ProductCard.defaultProps = {
    date: "-",
    face: "-",
    price: 0,
    size: "0",
    isAds: false,
};
ProductCard.propTypes = {
    /**
      `date` for date product card
      */
    date: PropTypes.string,
    /**
      `face` for image product card
      */
    face: PropTypes.string,
    /**
      `isAds` for flag for ads product card
      */
    isAds: PropTypes.bool,
    /**
      `price` for price product card
      */
    price: PropTypes.number,
    /**
      `size` for size of product
      */
    size: PropTypes.string,
};
export default ProductCard;
