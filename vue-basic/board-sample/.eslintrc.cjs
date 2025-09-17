/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		/* 1) Vuejs Style Guide | A - Essential */
		'plugin:vue/vue3-essential',
		/* 2) ESLint Rules recommend */
		'eslint:recommended',
		/* 3) Truns off all rules unnecessary or might conflict with Prettier */
		'@vue/eslint-config-prettier',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
	/* 4) 추가하고 싶은 규칙을 추가한다 */
	rules: {
		/* no-console */
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto', // 한줄 추가
			},
		],
	},
};
