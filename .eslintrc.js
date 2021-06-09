module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@components', './src/components'],
					['@api', './src/api'],
					['@style', './src/style'],
					['@constant', './src/constant'],
				],
			},
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{ js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never' },
		],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
	},
};
