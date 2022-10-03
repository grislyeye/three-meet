const common = require('./common.js')

module.exports = {
  "names": [ "docsify-links-fragments-only" ],
  "description": "Internal Docsify should use URL fragments (and not '?id=')",
  "tags": [ "custom", "docsify" ],
  "function": (params, onError) => {
     params
       .tokens
       .filter((token) => token.type === "inline")
       .forEach((inline) => {
         inline
           .children
           .filter((child) => child.type === 'link_open')
           .forEach((link) => {
             for (const attr of link.attrs) {
               if (common.isDocsifyLink(attr) && common.isRelativeLink(attr) && attr[1].includes('?id=')) {
                 onError({
                   "lineNumber": inline.lineNumber,
                   "context": attr[1]
                 });
               }
             }
           })
       });
  }
};
