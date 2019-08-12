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
			babelrc: false,
			exclude: 'node_modules/**',
			presets: [
				"@babel/react",
				"@babel/preset-env",
			],
			plugins: [
				'@babel/plugin-transform-react-jsx',
				'@babel/plugin-proposal-class-properties',
				'@babel/plugin-proposal-object-rest-spread'
			]
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
