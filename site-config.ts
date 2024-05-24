export const siteConfig = {
  appName: "Alpacastack",
  appDescription: "One site to rule them all",
  isUnderConstruction: false, //Options: true, false - Ads an under construction page to all but /admin route.  
  isBlogPublic: true, //Options: true, false - Redirects /blog route to 404. Be sure to remove blog route from constants if false.
  themeColor: 'dark', //Options: light, dark - Colors adjusted in global.css
  routes: {
    //Every route is prive by default, add a route here to make public. 
    publicRoutes: [
      "/api/webhook/stripe",
      "/new-verification",
      "/contact-us",
      "/terms-conditions",
      "/privacy-policy",
      "/newsletter",
      "/",
    ],
    //Used for Authentication. These routes will redirect logged in users to /dashboard
    authRoutes: [
      "/login",
      "/register",
      "/error",
      "/reset",
      "/new-password"
    ],
    //Prefix for API auth routes. Routes that start with this prefix are used for api auth purposes. 
    apiAuthPrefix: "/api/auth",
    //Default redirect path after loging in. 
    defaultLoginRedirect: '/dashboard',

  },
  email: {
    adminEmail: "noreply@alpacastack.com"
  },
  stripe: {
    plans: [
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1PH9y7GVfP1i6nIpi9nBrtM7" : "price_456",
        name: "Starter Stack",
        isFeatured: false,
        description: "Perfect for small projects",
        price: 169,
        priceAnchor: 269,
        features: [
          {
            name: "Boilerplate source code",
            included: true
          },
          {
            name: "Setup documentaion",
            included: true
          },
          {
            name: "Blog CMS",
            included: true
          },
          {
            name: "Stripe payments",
            included: true
          },
          {
            name: "PostgreSQL / Prisma",
            included: true
          },
          {
            name: "Full Auth & Oauth Integration",
            included: true
          },
          {
            name: "Custom Component Library",
            included: true
          },
          {
            name: "Figma design files",
            included: false
          },
          {
            name: "Chat GPT marketing prompts",
            included: false
          },
          {
            name: "Discord Community",
            included: false
          },
          {
            name: "Lifetime updates",
            included: false
          },
        ],
      },
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1PHV1iGVfP1i6nIpMpZJiXOo" : "price_456",
        isFeatured: true,
        name: "Pro Stack",
        description: "You need more power",
        price: 199,
        priceAnchor: 299,
        features: [
          {
            name: "Boilerplate source code",
            included: true
          },
          {
            name: "Setup documentaion",
            included: true
          },
          {
            name: "Blog CMS",
            included: true
          },
          {
            name: "Stripe payments",
            included: true
          },
          {
            name: "PostgreSQL / Prisma",
            included: true
          },
          {
            name: "Full Auth & Oauth Integration",
            included: true
          },
          {
            name: "Custom Component Library",
            included: true
          },
          {
            name: "Figma design files",
            included: true
          },
          {
            name: "Chat GPT marketing prompts",
            included: true
          },
          {
            name: "Discord Community",
            included: true
          },
          {
            name: "Lifetime updates",
            included: true
          },
        ],
      },
    ],
  },
}
