const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const svg = require('rollup-plugin-svg');
const { uglify } = require('rollup-plugin-uglify');
const { minify } = require('uglify-es');

module.exports = {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'cjs'
	},
	external: [
		'react',
		'styled-components'
	],
	plugins: [
		resolve({
			extensions: ['.js', '.json', '.jsx']
		}),
		babel(({
			exclude: 'node_modules/**',
			plugins: ['@babel/plugin-external-helpers']
		})),
		commonjs(),
		svg(),
		uglify({}, minify)
	]
};
