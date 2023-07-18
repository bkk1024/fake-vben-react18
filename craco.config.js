/*
 * @Author: 二师弟
 * @Date: 2023-06-29 13:39:40
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-29 15:07:43
 * @Description: craco 的根配置。craco 是为了无 eject 、可配置式的去修改 CRA 默认提供的工程配置，这样既能享受 CRA 带来的便利和后续升级，也能自己去自定义打包配置完成项目需要，一举两得。
 */

const path = require("path")
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
	webpack: {
		alias: {
			// "@": resolve("src")
		},
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.module.rules[1].oneOf = [
				...[
					{
						test: /.svg$/,
						include: resolve("./src/assets/svgs/svg"), // 存放svg的文件夹
						loader: "svg-sprite-loader",
						options: {
							symbolId: "icon-[name]",
						},
					},
				],
				...webpackConfig.module.rules[1].oneOf,
			]
			return webpackConfig
		},
	},
}
