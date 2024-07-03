module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/warnings",
    // "plugin:import/typescript",
    "plugin:import/errors",
    // "plugin:sonarjs/recommended",
    "plugin:jsx-a11y/recommended",
    // "react-app",
    "google",
    // "airbnb",
    // "wesbos",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    "requireConfigFile": false,
    "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module",
    // "ecmaVersion": "latest",
    // "ecmaVersion": 7,
    "ecmaFeatures": {
      "modules": true,
      "jsx": true,
      "forOf": true,
      "blockBindings": true,
      "arrowFunctions": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "generators": true,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true
    }
  },
  plugins: [
    "react-refresh",
    "react",
    "react-hooks",
    // "sonarjs",
    "jsx-a11y",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // "sonarjs/no-duplicate-string": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": "error",
    "import/no-cycle": "error",
    "array-callback-return": "warn",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "array-callback-return": "warn",
    "react/no-unused-state": "warn",
    "quotes": ["warn", "single"],
    "quote-props": ["warn", "as-needed"],
    "no-multi-spaces": "warn",
    "react/boolean-prop-naming": "warn",
    "indent": ["warn", 2],
    "object-curly-spacing": [2, "always"],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
          "extensions": ['.js', '.jsx', '.ts', '.tsx'],
          "moduleDirectory": ['node_modules', 'src/'],
      },
      // "typescript": {}
    }
  },
}
