import NextAuth from "next-auth";
import authConfig from "@/auth.config";
//TODO: Clean Up / Make Simpler

import {
  DEFAULT_LOGIN_REDIRECT,
  isUnderConstruction,
  underConstructionRoutes,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

export const { auth } = NextAuth(authConfig);

//This middleware has been setup to restrict all sites by default. Only the allowed sites in routes.ts are unrestricted.
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isUnderConstructionRoutes = underConstructionRoutes.includes(nextUrl.pathname)
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname) || nextUrl.pathname.startsWith('/blog');
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //Be careful the order of this if clause matters. If wrong it will result in infinate redirect loop.

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null
  }

  if (isUnderConstruction && !isUnderConstructionRoutes) {
    if(!isLoggedIn && nextUrl.pathname.startsWith('/dashboard')) {
      return Response.redirect(new URL('/login', nextUrl))
    }
    if(!nextUrl.pathname.startsWith('/admin')) {
      return Response.redirect(new URL('/under-construction', nextUrl));
    }
    return null
  }

  if(!isUnderConstruction && isLoggedIn && nextUrl.pathname === '/under-construction') {
    return Response.redirect(new URL('/', nextUrl))
  }

  if(isUnderConstruction && isUnderConstructionRoutes) {
    return
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
