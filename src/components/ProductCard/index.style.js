import styled from "styled-components";

const StyleProductCard = styled.div`
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: block;
    height: 100%;
    padding: 0px;
    width: 100%;
    .product__card {
        &--top {
            background: #e4dd79;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            display: flex;
            min-height: 30vh;
            padding: 0;
            width: 100%;
            img {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                display: block;
                height: 100%;
                object-fit: contain;
                width: 100%;
            }
        }

        &--bottom {
            display: flex;
            flex-direction: column;
            padding: 12px;
            width: 100%;
            /* height: 100%; */

            div {
                display: block;
            }
        }

        &--face {
            align-items: center;
            display: flex;
            font-size: ${props => props.size}px;
            justify-content: center;
            padding: 20px;
            width: 100%;
            width: 100%;
            &-ads {
                padding: 0;
            }
        }

        &--date {
            color: rgba(49, 53, 59, 0.96);
            font-size: 0.86rem;
            line-height: 1.5;
            margin-bottom: 4px;
        }
        &--price {
            font-size: 1rem;
            font-weight: bold;
            line-height: 1.43;
            margin-bottom: 4px;
        }
        &--size {
            color: rgba(49, 53, 59, 0.68);
            font-size: 0.71rem;
            font-weight: bold;
            letter-spacing: normal;
            line-height: 1.4;
            margin-bottom: 4px;
        }
    }
`;

export default StyleProductCard;
