const { normalizeURL } = require('./crawl.js')
const {test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => { 
	const input = 'https://muchas-gracias-afficion/siuuuuu'
	const actual = normalizeURL(input)
	const expected = 'muchas-gracias-afficion/siuuuuu'
	expect(actual).toEqual(expected)
})

test('normalizeURL strip protocol with full url example', () => { 
	const input = 'https://ruigay:euseihehehsiuu123@fantasyquest.com:8080/maps?sort=rank#id'
	const actual = normalizeURL(input)
	const expected = 'fantasyquest.com/maps'
	expect(actual).toEqual(expected)
})

test('normalizeURL strip protocol throws TypeError with empty input', () => {
	const input = ''
	expect(() => normalizeURL(input)).toThrow(TypeError)
	expect(() => normalizeURL(input)).toThrow('Empty urlString')
})

test('normalizeURL strip protocol correctly trims trailing slash', () => {
	const input = 'https://boot.dev/leaderboard/'
	const actual = normalizeURL(input)
	const expected = 'boot.dev/leaderboard'
	expect(actual).toEqual(expected)
})

test('normalizeURL strip protocol throws TypeError with an invalid urlString', () => {
	const input = 'this-is-not-a-valid-url-string'
	expect(() => normalizeURL(input)).toThrow(TypeError)
	expect(() => normalizeURL(input)).toThrow('Invalid urlString')
})

test('normalizeURL strip protocol is capital insensitive', () => {
	const input = 'http://bLoG.WEBSITE.DEV/testpath'
	const actual = normalizeURL(input)
	const expected = 'blog.website.dev/testpath'
	expect(actual).toEqual(expected)
})
