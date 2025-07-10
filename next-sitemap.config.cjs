/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://baumgartner-development.ch',
  generateRobotsTxt: true,
  exclude: ['/studio', '/studio/*', '/api'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/studio/*', '/api'],
      },
    ],
  },
};
