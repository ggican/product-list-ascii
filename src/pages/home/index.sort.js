import React from "react";
import Container from "../../components/Container";
import { SelectOption } from "../../components/Form";

const Style = {
    marginTop: 0,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    position: "sticky",
    top: 45,
    borderRadius: 4,
    zIndex: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTop: "3px solid #4a4a4a",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.05)",
};

const HomePageSort = ({ onGetValueSort = () => {}, value = "id" }) => {
    return (
        <Container style={Style}>
            <SelectOption
                label="Sort By"
                value={value}
                onGetValue={onGetValueSort}
                options={[
                    {
                        label: "ID",
                        value: "id",
                    },
                    {
                        label: "Price",
                        value: "price",
                    },
                    {
                        label: "Size",
                        value: "size",
                    },
                ]}
            ></SelectOption>
        </Container>
    );
};

export default HomePageSort;
