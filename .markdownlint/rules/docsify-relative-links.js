const common = require('./common.js')

module.exports = {
  "names": [ "docsify-relative-link" ],
  "description": "Internal Docsify links should be relative",
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
               if (common.isDocsifyLink(attr) && !common.isRelativeLink(attr)) {
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
