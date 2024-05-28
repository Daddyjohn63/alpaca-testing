/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_PRIMARY_DOMAIN || "https://staging.alpacastack.com",
  generateRobotsTxt: true,
  outDir: './public/',
  exclude: ["/api/*", "/dashboard/*", "/admin/*", "/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

