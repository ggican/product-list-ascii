import React from "react";
import Container from "../../components/container";

const Style = {
    marginTop: 20,
    paddingBottom: 0,
    marginBottom: 20,
    backgroundColor: "#fff",
    position: "sticky",
    top: 58,
    borderRadius: 4,
    zIndex: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTop: "3px solid #4a4a4a",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.05)",
};

const HomePageSort = ({ onGetValueSort = () => {}, value = "" }) => {
    return (
        <Container style={Style}>
            <label htmlFor="sort">Sort By</label>
            <select
                onChange={onGetValueSort}
                defaultValue={value}
                name="sort"
                id="sort"
            >
                <option value="id">ID</option>
                <option value="price">Price</option>

                <option value="id">Size</option>
            </select>
        </Container>
    );
};

export default HomePageSort;
