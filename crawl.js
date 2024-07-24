function normalizeURL(urlString) {
	
	if (urlString.length === 0) {
		throw new TypeError('Empty urlString')
	}

	let urlObj
	try {
		urlObj = new URL(urlString)
	} catch(err) {
		throw new TypeError('Invalid urlString')	
	}

	const normalized = `${urlObj.hostname}${urlObj.pathname}`
	
	if (normalized.slice(-1) === '/') {
		return normalized.slice(0,-1)
	}

	return normalized
}

module.exports = {
	normalizeURL
}
