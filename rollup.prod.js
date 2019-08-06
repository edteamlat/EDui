const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const { minify } = require('uglify-es');

module.exports = {
	entry: 'src/index.js',
	moduleName: 'edui',
	external: [
		'react',
		'styled-components'
	],
	globals: {
		react: 'React',
		'styled-components': 'styled-components',
	},
	plugins: [
		resolve(),
		babel(({
			exclude: 'node_modules/**',
			plugins: ['external-helpers']
		})),
		commonjs(),
		uglify({}, minify)
	]
};
