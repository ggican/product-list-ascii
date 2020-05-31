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
        // servicesAction(dispatch).productService([
        //     {
        //         url: `products`,
        //         method: "GET",
        //         reducer: "service",
        //         key: "list",
        //         group: "product",
        //         params: params,
        //         message: {
        //             200: {
        //                 mode: {
        //                     use: "alert",
        //                     type: "success",
        //                     timeOut: 3000,
        //                 },
        //                 text: "Success Get Ingredients",
        //             },
        //         },
        //     },
        //     {
        //         url: `ads/?r=${Math.floor(Math.random() * 1000)}`,
        //         method: "GET",
        //         reducer: "service",
        //         key: "adds",
        //         group: "product",
        //         message: {
        //             200: {
        //                 mode: {
        //                     use: "alert",
        //                     type: "success",
        //                     timeOut: 3000,
        //                 },
        //                 text: "Success Get Ingredients",
        //             },
        //         },
        //     },
        // ]);
    },
    getAds: ({ dispatch }) => {
        servicesAction(dispatch).reduxFetch();
    },
};

export default service;
