const jsdom = require("jsdom")
const { JSDOM } = jsdom

function getURLsFromHTML(htmlBody, baseURL) {
  const urls = []
  const dom = new JSDOM(htmlBody)
  const anchors = dom.window.document.querySelectorAll('a')

  for (const anchor of anchors) {
    if (anchor.hasAttribute('href')) {
      let href = anchor.getAttribute('href')

      if (href.length === 0) {
        continue
      }

      try {
        href = new URL(href, baseURL).href
        urls.push(href)
      } catch (err) {
        console.log(`Error: ${err.message}`)
      }
    }
  }

  return urls
}

function normalizeURL(urlString) {

  if (urlString.length === 0) {
    throw new TypeError('Empty urlString')
  }

  let urlObj
  try {
    urlObj = new URL(urlString)
  } catch (err) {
    throw new TypeError('Invalid urlString')
  }

  const normalized = `${urlObj.hostname}${urlObj.pathname}`

  if (normalized.slice(-1) === '/') {
    return normalized.slice(0, -1)
  }

  return normalized
}

module.exports = {
  normalizeURL,
  getURLsFromHTML
}
