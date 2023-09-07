module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['eslint-plugin-simple-import-sort', 'eslint-plugin-import'],
  rules: {
    // General
    'no-console': 'error',
    'linebreak-style': 'off',
    'flowtype/no-types-missing-file-annotation': 'off',
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'no-shadow': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    // 'no-use-before-define': ['error', { variables: false }],
    'no-use-before-define': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'lines-between-class-members': 'off',
    'prettier/prettier': 'error',
    'react/no-unstable-nested-components': 'off',

    // Typescript rules
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.
    'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': 'off',

    // React-Hooks Plugin
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    // React-Native Plugin
    'react-native/no-inline-styles': 'error',

    // Import & Import Sort Rules
    'simple-import-sort/sort': 'off',
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
