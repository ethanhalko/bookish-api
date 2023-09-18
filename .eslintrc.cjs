module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
    },
    parser: '@typescript-eslint/parser',
    rules: {
        'max-classes-per-file': 1,
        '@typescript-eslint/semi': 0,
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                args: 'none'
            }
        ],
        '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'comma-dangle': [2, 'only-multiline'],
        'array-bracket-spacing': [2, 'never'],
        'block-scoped-var': 2,
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        'prefer-const': [
            2,
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
        'object-shorthand': [
            2,
            'always',
            {
                avoidQuotes: true,
                avoidExplicitReturnArrows: true
            }
        ],
        camelcase: 0,
        complexity: [2, { max: 12 }],
        'computed-property-spacing': [2, 'never'],
        'no-console': [1, { allow: ['warn', 'error'] }],
        curly: 2,
        'eol-last': 2,
        eqeqeq: [2, 'smart'],
        'max-depth': [1, 3],
        'max-len': 0,
        'max-statements': [1, 60],
        'max-nested-callbacks': [2, 3],
        'new-cap': 1,
        'no-else-return': 2,
        'no-plusplus': 0,
        'no-extend-native': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-trailing-spaces': 2,
        'no-unreachable': 2,
        'no-unexpected-multiline': 2,
        'no-constant-condition': 0,
        'no-unused-vars': [2, { ignoreRestSiblings: true }],
        'no-empty-function': [1, { allow: ['arrowFunctions'] }],
        'no-use-before-define': [2, 'nofunc'],
        'no-var': 2,
        'object-curly-spacing': [1, 'always', { objectsInObjects: true }],
        'padding-line-between-statements': [1, { blankLine: 'always', prev: '*', next: 'return' }],
        quotes: [1, 'single', 'avoid-escape'],
        'quote-props': [1, 'as-needed'],
        semi: [2, 'always'],
        indent: ['error', 2],
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'space-unary-ops': 2,
        'space-in-parens': [1, 'never'],
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'space-before-blocks': 2,
        'no-unused-labels': 1,
    }
};
