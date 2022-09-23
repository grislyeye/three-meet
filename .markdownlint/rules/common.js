exports.isRelativeLink = (link) => {
  const href = link[1]
  return link[0] === "href"
    && href
    && (href.startsWith('.') || href.startsWith('#'))
}

exports.isDocsifyLink = (link) => {
  const href = link[1]
  return link[0] === "href"
    && href
    && !href.startsWith('http')
}
