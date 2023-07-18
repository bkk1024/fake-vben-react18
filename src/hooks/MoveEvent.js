/*
 * @Author: 二师弟
 * @Date: 2023-06-20 23:15:52
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 23:17:22
 * @Description: 元素移入移出事件钩子
 */

const useMoveEvent = () => {
	/**
	 * @description: 移入移出事件
	 * @param {*} timer 定时器
	 * @param {*} Enter 移入事件
	 * @param {*} Leave 移除事件
	 */
	const moveEventHandler = {
		timer: null,
		Enter: (fn, delay = 300) => {
			if (moveEventHandler.timer)
				clearTimeout(moveEventHandler.timer)
			moveEventHandler.timer = setTimeout(
				function () {
					fn && fn()
				},
				delay
			)
		},
		Leave: (fn, delay = 300) => {
			if (moveEventHandler.timer)
				clearTimeout(moveEventHandler.timer)
			moveEventHandler.timer = setTimeout(
				function () {
					fn && fn()
				},
				delay
			)
		},
	}

	return moveEventHandler
}

export default useMoveEvent
