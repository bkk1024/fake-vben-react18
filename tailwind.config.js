/*
 * @Author: 二师弟
 * @Date: 2023-06-16 19:04:00
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 15:29:58
 * @Description: tailwindcss 配置文件
 */
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			// 配置关键帧
			keyframes: {
				itemEntryX: {
					to: {
						opacity: 1,
						transform: "translate(0)",
					},
				},
				moveInY: {
					to: {
						opacity: 1,
						transform: "scaleY(1)",
					},
				},
			},
			// 配置动画
			// animation: {
			// 	itemEntryX:
			// }
		},
	},
	plugins: [],
}
