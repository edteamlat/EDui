const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const { uglify } = require("rollup-plugin-uglify");
const { minify } = require("uglify-es");

const pkg = require("./package.json");
const babelSetup = require("./babel");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [
    resolve({
      extensions: [".js", ".json", ".jsx", ".scss"]
    }),
    babel(babelSetup),
    commonjs(),
    uglify({}, minify)
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
};
