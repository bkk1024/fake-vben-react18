/*
 * @Author: 二师弟
 * @Date: 2023-06-30 18:25:52
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 19:20:27
 * @Description: 列表每条内容
 */
import React, { useEffect, useRef, useState } from "react"
// import headimg from "../../assets/imgs/headimg1.png"

const Item = (props) => {
	const { content } = props
	const liRef = useRef(null)
	const [isLast, setIsLast] = useState(false)

	useEffect(() => {
		if (!liRef.current.nextElementSibling) {
			setIsLast(true)
		}
	}, [liRef])

	return (
		<li ref={liRef} className={`py-3 flex ${!isLast ? "border-b" : ""}`}>
			<div className="w-8 h-8 mr-4">
				<img className="w-full h-full object-cover" src={content.headimg} alt="" />
			</div>
			<div>
				<div>{content.html}</div>
				<span className="text-gray-400">{content.date}</span>
			</div>
		</li>
	)
}

export default Item
