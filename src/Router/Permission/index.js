/*
 * @Author: 二师弟
 * @Date: 2023-06-16 21:42:52
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-02 17:58:25
 * @Description: Permission 路由入口
 */
import { KeyOutlined } from "@ant-design/icons"
import Front from "./Front"
import Back from "./Back"

const Permission = {
	path: "/permission",
	pathname: "Permission",
	key: "/permission",
	title: "权限管理",
	icon: KeyOutlined,
	children: [Front, Back],
}

export default Permission
