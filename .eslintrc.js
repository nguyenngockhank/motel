module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier",
    ],
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      project: "./tsconfig.eslint.json",
    },
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    rules: {
      "func-names": ["warn", "as-needed"],
      "import/prefer-default-export": "off",
      "no-param-reassign": "off",
      "no-plusplus": "off",
      "max-len": "warn",
      "default-case": "warn",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ]
    },
}
  