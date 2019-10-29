module.exports = {
  babelrc: false,
  exclude: "node_modules/**",
  presets: ["@babel/react", "@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ]
};
