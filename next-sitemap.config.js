/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.kubetail.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
};
