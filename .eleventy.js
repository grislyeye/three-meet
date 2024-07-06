const project = require('./package.json');
const markdownItAnchor = require('markdown-it-anchor');

function byIndex(left, right) {
  const a = left.data.index ? Number.parseInt(left.data.index) : 0;
  const b = right.data.index ? Number.parseInt(right.data.index) : 0;
  return a - b;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("index", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("pages")
      .sort(byIndex);
  });

  eleventyConfig.addPassthroughCopy(
    {
      'node_modules/@lit': 'vendor/@lit',
      'node_modules/vellum-doc': 'vendor/vellum-doc'
    }
  );

  eleventyConfig.addGlobalData("project", project);

  eleventyConfig.amendLibrary('md', (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter('slugify')
    });
  });
};
