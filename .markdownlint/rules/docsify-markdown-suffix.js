const common = require('./common.js')

module.exports = {
  "names": [ "docsify-markdown-suffix" ],
  "description": "Docsify links should reference full file name",
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
               if (common.isDocsifyLink(attr) && !attr[1].startsWith('#') && !attr[1].includes('.md')) {
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
