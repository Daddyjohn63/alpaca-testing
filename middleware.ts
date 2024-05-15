import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  isUnderConstruction,
} from "@/routes";


export const { auth } = NextAuth(authConfig);

//This middleware has been setup to restrict all sites by default. Only the allowed sites in routes.ts are unrestricted.
export default auth((req) => {

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname) || nextUrl.pathname.startsWith('/blog');
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //Be careful the order of this if clause matters. If wrong it will result in infinate redirect loop.

  //if in api auth route, allow public
  if (isApiAuthRoute) {
    console.log("isApiAuthRoute")
    return null;
  }

  //Redirect all auth routes to default login page if NOT logged in. 
  if (isAuthRoute) {
    console.log("isAuthRoute")
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null
  }

  if(isUnderConstruction) {
      return null
  }

  //If the user is NOT logged in and the page is NOT a public page, redirect to login page. 
  if (!isLoggedIn && !isPublicRoute) {
    console.log("!isLogginIn && !isPublicRoute")

    let callbackUrl = nextUrl.pathname;

    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }


  //If it gets to this point and we return null, middleware does nothing essentually making the page public. 
  return null;
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
