export const siteConfig = {
  appName: "Alpacastack",
  appDescription: "Launch your SaaS in minutes, not months!",
  keywords: ['Next.js', 'React', 'JavaScript'],
  primaryDomain: 'alpacastack.com',
  isUnderConstruction: true, //Options: true, false - Ads an under construction page to all but /admin route.  
  isBlogPublic: false, //Options: true, false - Redirects /blog route to 404. Be sure to remove blog route from constants/nav-routes.ts if false.
  themeColor: 'dark', //Options: light, dark - Colors adjusted in global.css
  email: {
    testEmail: "onboarding@resend.dev",
    authEmail: "noreply@alpacastack.com"
  },
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
  fileStorage: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "alpacastack-post-images",
    bucketUrl: `https://f005.backblazeb2.com/file/alpacastack-post-images`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  stripe: {
    plans: [
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1PH9y7GVfP1i6nIpi9nBrtM7" : "price_1PMd7iGVfP1i6nIpL6Nn7ZyO",
        mode: 'payment', //subscription | payment
        name: "Starter Stack",
        githubRepoName: 'alpaca-stack-ts-template-starter',
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
        priceId: process.env.NODE_ENV === "development" ? "price_1PHV1iGVfP1i6nIpMpZJiXOo" : "price_1PMd82GVfP1i6nIpenRrEjPM",
        mode: 'payment', //subscription | payment
        isFeatured: true,
        name: "Pro Stack",
        githubRepoName: 'alpaca-stack-ts-template-pro',
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
