module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: { jsx: true, modules: true },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      1,
      {
        endOfLine: "auto",
        arrowParens: "avoid",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0,
    "no-console": 0,
    "prefer-const": 1,
    "no-unused-vars": 1,
    "no-underscore-dangle": 0,
    "default-param-last": 0,
    "react/prop-types": 0,
    "react/no-array-index-key": 1,
    camelcase: 0,
    "no-prototype-builtins": 0,
  },
}
