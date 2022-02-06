import './docsify-page-preview.js'

const plugin = (hook, vm) => {
  hook.afterEach((html, next) => {
    const container = document.createElement('div')
    container.innerHTML = html

    container.querySelectorAll('a[href^="#"]:not(.anchor')
      .forEach(element => {
        const link = vm.router.getFile(element.href)
        const page = vm.router.parse(link)

        const ref = page.query.id
          ? page.query.id.replace(/\.[^/.]+$/, '')
          : ''

        element.outerHTML = `
          <docsify-page-preview
            page="${page.file}"
            ref="${ref}"
          >${element.outerHTML}</docsify-page-preview>
        `
      })

    next(container.innerHTML)
  })
}

if (!window.$docsify) {
  window.$docsify = {}
}

window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin)
