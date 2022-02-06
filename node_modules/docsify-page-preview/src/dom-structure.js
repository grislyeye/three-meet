HTMLElement.prototype.subsection = function (id) {
  const subsection = this.cloneNode(true)

  Array.from(subsection.querySelectorAll('*'))
    .every((node) => {
      if (node.id === id) {
        return false
      } else if (node.querySelector && node.querySelector(`#${id}`)) {
        return true
      } else {
        if (node.remove) node.remove()
        return true
      }
    })

  return subsection
}
