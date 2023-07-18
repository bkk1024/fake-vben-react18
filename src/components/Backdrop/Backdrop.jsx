/*
 * @Author: 二师弟
 * @Date: 2023-06-17 23:24:36
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-18 15:32:55
 * @Description: 描述
 */
import React from "react"
import ReactDOM from "react-dom"

const BackDropRoot = document.querySelector(
	"#backdrop-root"
)

const Backdrop = (props) => {
	const template = (
		<div
			{...props}
			className="w-screen h-screen bg-black/60 fixed top-0 left-0 flex items-center justify-center"
		>
			{props.children}
		</div>
	)

	return ReactDOM.createPortal(
		template,
		BackDropRoot
	)
}

export default Backdrop
