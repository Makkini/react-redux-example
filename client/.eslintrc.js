module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/quotes': [
            'warn',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/semi': ['warn'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'semi': [2, 'always'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-useless-return': 'off',
        'no-param-reassign': 'off'
    },
    globals: {
        __IS_DEV__: true,
        module: true
    },
};

