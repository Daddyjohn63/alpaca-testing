/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_PRIMARY_DOMAIN || "https://staging.alpacastack.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false, //Node module currently not working so disabling it for now. 
  exclude: ["/api/*", "/dashboard/*", "/admin/*", "/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

