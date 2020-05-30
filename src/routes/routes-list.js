import { lazy } from "react";

const routeList = [
    {
        path: "/",
        component: lazy(() => import("../pages/home")),
        role: ["GUEST"],
    },
];

export default routeList;
