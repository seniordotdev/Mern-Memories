module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": "warn",
		"no-unused-vars": "warn",
		"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
		"react/prop-types": "off",
		"no-dupe-keys": "off",
		"react-hooks/exhaustive-deps": "off",
	},
};
