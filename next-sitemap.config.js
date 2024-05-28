//Reference: https://www.npmjs.com/package/next-sitemap#create-config-file
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://staging.alpacastack.com",
  generateRobotsTxt: true,
  exclude: ["/dashboard", "/admin", "/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

