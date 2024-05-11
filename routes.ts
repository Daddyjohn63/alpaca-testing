/**
 * An array of routes that redirect to under construction page
 * The routes do not require authentication
 * @type {string[]}
 */

export const underConstructionRoutes = [
    "/"
]

/**
 * An array of routes that are accessible to the public
 * The routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/new-verification",
    "/under-construction",
    "/",
];


/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */

export const authRoutes = [
    "/login",
    "/register",
    "/error",
    "/reset",
    "/new-password"
];

/**
 * An prefix for API authentication routes
 * Routes that start with this prefix are used for API authenication purposes.
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
