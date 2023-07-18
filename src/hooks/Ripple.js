/*
 * @Author: 二师弟
 * @Date: 2023-07-04 21:15:26
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 23:31:08
 * @Description: 水波纹动画
 */

const useRipple = () => {
	const _reStyle = (options) => {
		// 节点生成时的默认样式，这些样式不会引发 transition 动画
		const { w, h, x, y } = options
		return `
      width:${w}px;
      height:${h}px;
      position:absolute;
      left:${x}px;
      top:${y}px;
      margin-left:-${w / 2}px;
      margin-top:-${h / 2}px;
      border-radius:50%;
      transform-origin:50% 50%;
      transition:all 0.4s ease-in-out;
      background-color:rgba(0,0,0,0.15);
      pointer-events:none;
    `
	}

	const createRipple = (el, options) => {
		const w = el.offsetWidth
		const h = el.offsetHeight
		const { x, y } = options
		el.setAttribute("style", "overflow:hidden;position:relative;")
		const _container = document.createElement("div")
		_container?.setAttribute("style", _reStyle({ w, h, x, y }))
		_container.setAttribute("class", "scale-[0] opacity-0")
		el.appendChild(_container)
		setTimeout(() => {
			// setTimeout-0 也不是立刻执行的，它在宏任务中，所以这里的 setAttribute 与上面的 setAttribute 有时间间隔
			// 根据类名的变化和 transition，就可以达到动画效果
			_container?.setAttribute("class", "scale-[3] opacity-100")
		})
		// transition 完成后
		_container.addEventListener("transitionend", () => {
			_container?.setAttribute("class", "scale-[3] opacity-0")
		})
		// 节点 transition 持续时间，这里转换为毫秒
		const transitionDuration = Number(_container?.style.transitionDuration.split("s")[0]) * 1000
		// 移除节点
		setTimeout(() => {
			_container?.parentNode?.removeChild(_container)
		}, transitionDuration * 2)
	}

	return { createRipple }
}

export default useRipple
