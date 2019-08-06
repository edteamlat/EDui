const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const svg = require('rollup-plugin-svg');

module.exports = {
	input: 'src/index.js',
	moduleName: 'EDui',
	output: {
		file: 'dist/index.js',
		format: 'cjs'
	},
	plugins: [
		resolve({
			extensions: ['.js', '.json', '.jsx']
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'node_modules/react-is/index.js': ['isElement']
			}
		}),
		svg()
	],
	external: [
		'react',
		'styled-components'
	],
	global: [
		'react',
		'styled-components'
	]
};
