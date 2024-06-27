const project = require('./package.json');
const replaceLink = require('markdown-it-replace-link');
const path = require("path")

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

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(replaceLink, {
    replaceLink: function (link) {
      const isUrl = URL.canParse(link);
      const file = path.parse(link);

      if (!isUrl && file.ext === '.md') {
        const anchor = file.name;
        return `#${anchor}`;
      } else if (!isUrl && file.ext.startsWith('.md#')) {
        const anchor = file.ext.split('#').pop();
        return `#${anchor}`;
      }

      return link;
    }
  }));
};
