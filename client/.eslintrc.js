module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json"
	},
	settings: {
		"import/resolver": "webpack",
		react: {
			version: "detect"
		}
	},
	extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": ["error", {endOfLine: "auto"}],
		"react/prop-types": "off",
		"react/function-component-definition": "off",
		"no-console": "off",
		"react/jsx-props-no-spreading": "off",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				assert: "either"
			}
		],
		"react/require-default-props": "off",
		"no-param-reassign": "off",
		"react/jsx-no-useless-fragment": ["error", {allowExpressions: true}],
		"no-underscore-dangle": [
			"error",
			{
				allow: ["_id"]
			}
		],
		"@typescript-eslint/no-use-before-define": ["error", {functions: false}],
		"import/prefer-default-export": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"@typescript-eslint/lines-between-class-members": [
			"error",
			"always",
			{exceptAfterSingleLine: true}
		]
	}
};
