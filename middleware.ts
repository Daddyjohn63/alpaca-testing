import NextAuth from "next-auth";
import authConfig from "@/auth.config";
//TODO: Clean Up / Make Simpler

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  underConstructionRoutes,
} from "@/routes";

export const { auth } = NextAuth(authConfig);


//This middleware has been setup to restrict all sites by default. Only the allowed sites in routes.ts are unrestricted.
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isUnderConstructionRoute = underConstructionRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname) || nextUrl.pathname.startsWith('/blog');
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //Be careful the order of this if clause matters. If wrong it will result in infinate redirect loop.

  if (isApiAuthRoute) {
    return null;
  }

  if (isUnderConstructionRoute) {
    if(!isLoggedIn) {
      console.log("Under Construction")
      return Response.redirect(new URL('/under-construction', nextUrl));
    }
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null
  }

  if (!isLoggedIn && !isPublicRoute) {

    let callbackUrl = nextUrl.pathname;

    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }
  return null;
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
