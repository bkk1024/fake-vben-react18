/*
 * @Author: 二师弟
 * @Date: 2023-07-03 19:03:21
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 17:49:46
 * @Description: 右键菜单钩子
 */
import ContextMenu from "../components/ContextMenu/ContextMenu"
import React from "react"
import ReactDOM from "react-dom/client"

const useContextMenu = () => {
	let _container = null // 放置右键菜单的容器
	let _root = null // 上面的容器转变为的 react root

	/**
	 * @description: 创建放置右键菜单的 root
	 * @return {*}
	 */
	const _createRoot = () => {
		if (!_container) {
			_container = document.createElement("div")
			document.body.appendChild(_container)
		}
		if (!_root) {
			_root = ReactDOM.createRoot(_container)
		}
		return _root
	}

	/**
	 * @description: body 监控 click 事件
	 * @param {*} fn
	 * @return {*}
	 */
	const bodyClickListener = (fn) => {
		document.body.removeEventListener("click", fn)
		document.body.addEventListener("click", fn)
	}

	/**
	 * @description: 移除右键菜单
	 * @param {*} e
	 * @return {*}
	 */
	const removeContextMenu = (e) => {
		if (_container && _root) {
			document.body.removeChild(_container)
			_container = null
			_root = null
		}
	}

	/**
	 * @description: 创建右键菜单
	 * @param {*} options
	 * @return {*}
	 */
	const createContextMenu = (options) => {
		bodyClickListener(removeContextMenu)

		const root = _createRoot()
		const ContextMenuEl = React.createElement(ContextMenu, options)
		root.render(ContextMenuEl)
	}

	return [createContextMenu, removeContextMenu]
}

export default useContextMenu
