module.exports = {
	// 解决 Parsing error: Unexpected token 报错
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// 解决 Parsing error: Unexpected token 报错
		parser: "babel-eslint",
		// 解决 Parsing error: The keyword 'import' is reserved 报错
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			// ES 其他特性
			jsx: true, // 如果是 React 项目，就需要开启 jsx 语法
		},
	},
	rules: {
		// 圈复杂度最多 15
		complexity: ["error", 15],
	},
	// 继承
	extends: ["react-app"],
}
