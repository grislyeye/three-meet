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
               if (isDocsifyLink(attr) && !isRelativeLink(attr)) {
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

const isDocsifyLink = (link) => {
  const href = link[1]
  return link[0] === "href"
    && href
    && !href.startsWith('http')
}


const isRelativeLink = (link) => {
  const href = link[1]
  return link[0] === "href"
    && href
    && (href.startsWith('.') || href.startsWith('#'))
}
