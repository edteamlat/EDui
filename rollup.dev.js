const resolve = require("rollup-plugin-node-resolve");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");

const pkg = require("./package.json");
const babelSetup = require("./babel");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true
  },
  plugins: [
    resolve({
      extensions: [".js", ".json", ".jsx", ".scss"]
    }),
    babel(babelSetup),
    commonjs()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
};
