/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pandityashshastri.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/astrology-consultation' || path === '/puja-services') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/ask-pandit-ji') {
      priority = 0.8;
      changefreq = 'daily'; // Q&A content updates frequently
    } else if (path === '/contact') {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path.startsWith('/pandit/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
