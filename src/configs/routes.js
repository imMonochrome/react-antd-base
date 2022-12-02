import { lazy } from "react";

const lazyLoad = (url) => {
    return lazy(() => import("../pages/" + url));
};

export const routes = [
    {
        path: "/",
        exact: true,
        component: lazyLoad("Dashboard"),
    },
    {
        path: "/dashboard",
        exact: true,
        component: lazyLoad("Dashboard"),
    },

    // Authentication Router
    {
        path: "/login",
        exact: true,
        component: lazyLoad("Login"),
    },
    {
        path: "/forgot-password",
        exact: true,
        component: lazyLoad("ForgotPassword"),
    },

    // Not Found page
    {
        path: "",
        exact: true,
        component: lazyLoad("NotFound"),
    },
];