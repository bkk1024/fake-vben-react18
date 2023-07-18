/*
 * @Author: 二师弟
 * @Date: 2023-06-20 19:04:05
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 19:12:07
 * @Description: 生成路由path和title的映射表的钩子
 */
const useRouterMap = () => {
	const RouterMap = (list) => {
		let pathTitleMap = {}
		list.forEach((item) => {
			if (item.key) {
				pathTitleMap[item.key] = item.title
				if (item.children) {
					pathTitleMap = {
						...pathTitleMap,
						...RouterMap(item.children),
					}
				}
			}
		})
		return pathTitleMap
	}
	return RouterMap
}

export default useRouterMap
