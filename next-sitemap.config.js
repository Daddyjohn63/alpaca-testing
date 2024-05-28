//Reference: https://www.npmjs.com/package/next-sitemap#create-config-file
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "http://localhost:3000",
  generateRobotsTxt: true,
  exclude: ["/api/auth/*", "/dashboard/*", "/admin/*", "/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

