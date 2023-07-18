/*
 * @Author: 二师弟
 * @Date: 2023-07-04 17:35:05
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 19:43:26
 * @Description: 复制文本钩子
 */
const useCopyText = () => {
	const copyText = async (text) => {
		let isSuccess = false

		if ("clipboard" in navigator) {
			// 判断当前浏览器是否能使用 clipboard
			await navigator.clipboard.writeText(text).then(
				(res) => {
					isSuccess = true
				},
				(err) => {
					isSuccess = false
				}
			)
		} else {
			// document.execCommand("copy") 复制，兼容性好
			const inputNode = document.createElement("input")
			inputNode.value = text
			document.body.appendChild(inputNode)
			inputNode.select()
			isSuccess = document.execCommand("copy")
			document.body.removeChild(inputNode)
		}

		return isSuccess
	}

	return { copyText }
}

export default useCopyText
