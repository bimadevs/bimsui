/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ui.bimadev.xyz', // Ganti dengan domain website kamu
  generateRobotsTxt: true, // Untuk generate robots.txt
  sitemapSize: 5000, // Maksimal URL per file sitemap
  changefreq: 'daily', // Frekuensi update sitemap
  priority: 0.7, // Prioritas URL dalam sitemap
};
