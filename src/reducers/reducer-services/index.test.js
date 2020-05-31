import { servicesRedux, servicesState } from "./reducer-services.redux";

describe("Reducer Services Component", () => {
    const state = servicesState;
    const result = {
        user: {
            auth: false,
        },
        product: {
            list: false,
        },
    };
    beforeEach(() => {});

    it("SUCCESS servicesRedux Snapshot servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 200,
            isError: false,
            isSuccess: true,
        };

        expect(servicesRedux(servicesState, actionTest)).toMatchSnapshot();
    });
    it("SUCCESS servicesState  Snapshot servicesState", () => {
        expect(servicesState).toMatchSnapshot();
    });
    it("SUCCESS servicesRedux type 200 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 200,
            isError: false,
            isSuccess: true,
        };

        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 201 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 201,
            isError: false,
            isSuccess: true,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 201 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 204,
            isError: false,
            isSuccess: true,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 201 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 400,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 401 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 401,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 404 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 404,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 409 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 409,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });

    it("SUCCESS servicesRedux type 500 function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            data: ["cool"],
            message: {
                message: "cool its me",
            },
            type: 500,
            isError: true,
            isSuccess: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: actionTest,
            },
        });
    });
    it("SUCCESS servicesRedux type CLEAR function servicesRedux", () => {
        const actionTest = {
            reducer: "reducer",
            group: "product",
            key: "list",
            defaultData: {
                isDefault: true,
            },
            type: "CLEAR",
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: {
                    isDefault: true,
                },
            },
        });
    });
    it("SUCCESS servicesRedux type DEFAULT function servicesRedux", () => {
        const actionTest = {
            type: false,
        };
        expect(servicesRedux(state, actionTest)).toEqual({
            ...result,
            product: {
                list: false,
            },
        });
    });
});
