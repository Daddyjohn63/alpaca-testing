//Reference: https://www.npmjs.com/package/next-sitemap#create-config-file
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_PRIMARY_DOMAIN || "https://alpacastack.com",
  generateRobotsTxt: true,
  exclude: ["/dashboard", "/admin", "/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

