import './dom-structure.js'
import { marked as markedjs } from './vendor/marked/src/marked.js'
import * as purify from './vendor/dompurify/dist/purify.es.js'

class DocsifyPagePreview extends HTMLElement {
  static defaultMinWidth = 300
  static defaultMinHeight = 200
  static defaultMaxWidth = 450
  static defaultMaxHeight = 200

  static popupStyle = `
    position: absolute;

    min-width: var(--docsify-page-preview-min-width, ${this.defaultMinWidth}px);
    min-height: var(--docsify-page-preview-min-height, ${this.defaultMinHeight}px);
    max-width: var(--docsify-page-preview-max-width, ${this.defaultMaxWidth}px);
    max-height: var(--docsify-page-preview-max-height, ${this.defaultMaxHeight}px);

    background: var(--docsify-page-preview-background, white);
    border-radius: .4em;
    border: solid var(--theme-color, #42b983);
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);

    margin-top: 1em;
    padding: 1em;
    z-index: 1;

    pointer-events: none;
    overflow: hidden;
  `

  constructor () {
    super()
    this.page = this.getAttribute('page')
    this.ref = this.getAttribute('ref')

    this.addEventListener('mouseover', this.showPreview)
    this.addEventListener('mouseout', this.hidePreview)
  }

  get popupVerticalOffset () {
    const computedMaxWidth = window
      .getComputedStyle(document.body)
      .getPropertyValue('--docsify-page-preview-max-width')

    const maxWidth = computedMaxWidth || DocsifyPagePreview.defaultMaxWidth
    const containerBox = document.getElementById('main').getBoundingClientRect()
    const containerWidth = containerBox.width
    const tooFarLeft = this.offsetLeft + maxWidth > containerWidth

    if (tooFarLeft) {
      return this.offsetLeft - maxWidth
    } else {
      return this.offsetLeft
    }
  }

  async showPreview () {
    if (!this.preview) {
      this.preview = await fetch(this.page, {
        method: 'GET',
        mode: 'same-origin',
        cache: 'no-cache'
      })
        .then(response => response.text())
        .then(md => markedjs.parse(md, { sanitizer: purify.default.sanitizer }))
    }

    if (!this.popup) {
      const page = document.createElement('div')
      page.innerHTML = this.preview

      this.popup = this.ref ? page.subsection(this.ref) : page
      this.popup.setAttribute('class', 'docsify preview-popup')

      this.append(this.popup)
    }

    this.popup.style.cssText = DocsifyPagePreview.popupStyle
    this.popup.style.left = `${this.popupVerticalOffset}px`
    this.popup.hidden = false
  }

  hidePreview () {
    if (this.popup) this.popup.hidden = true
  }
}

customElements.define('docsify-page-preview', DocsifyPagePreview)
