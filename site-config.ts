export const siteConfig = {
  appName: "Alpacastack",
  appDescription: "One site to rule them all",
  isUnderConstruction: false, //Options: true, false - Ads an under construction page to all but /admin route.  
  isBlogPublic: true, //Options: true, false - Redirects /blog route to 404. Be sure to remove blog route from constants if false.
  themeColor: 'dark', //Options: light, dark - Colors adjusted in global.css
  routes: {
    defaultLoginRedirect: '/dashboard',
    //Every route is prive by default, add a route here to make public. 
    publicRoutes: [
        "/new-verification",
        "/contact-us",
        "/terms-conditions",
        "/privacy-policy",
        "/",
    ],
    authRoutes: [
        "/login",
        "/register",
        "/error",
        "/reset",
        "/new-password"
    ],
    apiAuthPrefix: "/api/auth",
    

  },
  email: {
    adminEmail: "noreply@alpacastack.com"
  }
}
