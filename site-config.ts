export const siteConfig = {
  appName: "Alpacastack",
  appDescription: "Founded in [Year], [Company Name] is dedicated to [briefly state your mission or core offering, such as 'delivering innovative tech solutions' or 'enhancing everyday experiences with advanced digital tools'].", //Shown in footer
  keywords: ['Next.js', 'React', 'JavaScript'],
  primaryDomain: 'yourwebsite.com',
  isUnderConstruction: false, //Options: true, false - Ads an under construction page to all but /admin route.  
  isBlogPublic: true, //Options: true, false - Redirects /blog route to 404. Be sure to remove blog route from constants/nav-routes.ts if false.
  themeColor: 'dark', //Options: light, dark - Colors adjusted in global.css
  email: {
    testEmail: "onboarding@resend.dev",
    authEmail: "noreply@yourwebsite.com"
  },
  routes: {
    //Every route is prive by default, add a route here to make public. 
    publicRoutes: [
      "/api/webhook/stripe",
      "/new-verification",
      "/contact-us",
      "/demo",
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
    bucket: "your-bucket-name-here",
    bucketUrl: `https://f005.backblazeb2.com/file/your-bucket-name-here`,
  },
  stripe: {
    plans: [
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1234" : "price_5678",
        mode: 'payment', //subscription | payment
        name: "Basic Package",
        isFeatured: false,
        description: "Perfect for small teams",
        price: 49,
        priceAnchor: 99,
        features: [
          {
            name: "Feature 1 here",
            included: true
          },
          {
            name: "Feature 2 Here",
            included: true
          },
          {
            name: "Feature 3 Here",
            included: true
          },
          {
            name: "Feature 4 Here",
            included: true
          },
          {
            name: "Feature 5 Here",
            included: true
          },
          {
            name: "Feature 6 Here",
            included: false
          },
          {
            name: "Feature 7 Here",
            included: false
          },
          {
            name: "Feature 8 Here",
            included: false
          },
          {
            name: "Feature 9 Here",
            included: false
          },
        ],
      },
      {
        priceId: process.env.NODE_ENV === "development" ? "price_1234" : "price_5678",
        mode: 'payment', //subscription | payment
        isFeatured: true,
        name: "Pro Package",
        description: "You need more power",
        price: 99,
        priceAnchor: 299,

        features: [
          {
            name: "Feature 1 here",
            included: true
          },
          {
            name: "Feature 2 Here",
            included: true
          },
          {
            name: "Feature 3 Here",
            included: true
          },
          {
            name: "Feature 4 Here",
            included: true
          },
          {
            name: "Feature 5 Here",
            included: true
          },
          {
            name: "Feature 6 Here",
            included: true
          },
          {
            name: "Feature 7 Here",
            included: true
          },
          {
            name: "Feature 8 Here",
            included: true
          },
          {
            name: "Feature 9 Here",
            included: true
          },
        ],
      },
    ],
  },
}
