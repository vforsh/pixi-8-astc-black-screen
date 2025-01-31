const { Config } = require('prettier')

/**
 * @type {Config}
 */
module.exports = {
	trailingComma: 'es5',
	useTabs: true,
	tabWidth: 4,
	semi: false,
	printWidth: 120,
	singleQuote: true,
	quoteProps: 'consistent',
	plugins: ['prettier-plugin-organize-imports'],
}
