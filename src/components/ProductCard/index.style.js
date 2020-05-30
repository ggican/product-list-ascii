import styled from "styled-components";

const StyleProductCard = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    /* box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px; */
    padding: 0px;
    /* overflow: hidden; */
    /* margin-bottom: 15px; */
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 100%;
    .product__card {
        &--top {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background: #e4dd79;
            min-height: 30vh;
            padding: 10px;
            width: 100%;
            display: flex;
        }

        &--bottom {
            padding: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
            height: 100%;

            div {
                display: block;
            }
        }

        &--face {
            width: 100%;
            align-items: center;
            justify-content: center;
            font-size: ${props => props.size}px;
            display: flex;
            width: 100%;
            padding: 20px;
        }

        &--date {
            margin-bottom: 4px;
            font-size: 0.86rem;
            color: rgba(49, 53, 59, 0.96);
            line-height: 1.5;
        }
        &--price {
            margin-bottom: 4px;
            font-size: 1rem;
            font-weight: bold;
            line-height: 1.43;
        }
        &--size {
            font-weight: bold;
            font-size: 0.71rem;
            color: rgba(49, 53, 59, 0.68);
            line-height: 1.4;
            letter-spacing: normal;
            margin-bottom: 4px;
        }
    }
`;

export default StyleProductCard;
