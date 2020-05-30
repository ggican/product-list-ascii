// begin reducer
import { servicesAction } from "../../reducers";
// end reducer

const service = {
    productList: ({ dispatch, params }) => {
        servicesAction(dispatch).reduxFetch({
            url: `products`,
            method: "GET",
            reducer: "service",
            key: "list",
            group: "product",
            params: params,
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
            },
        });
    },
};

export default service;
