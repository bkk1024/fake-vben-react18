/*
 * @Author: 二师弟
 * @Date: 2023-06-29 18:58:22
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-01 21:56:00
 * @Description: 返回顶部按钮
 */
import React, { useEffect, useState } from "react"
import { CaretUpOutlined } from "@ant-design/icons"
import debounce from "lodash/debounce"

const BackTop = (props) => {
	const { layoutRef } = props
	const [isShow, setIsShow] = useState(false)

	const scrollHandler = debounce((e) => {
		if (e?.target.scrollTop > 100) {
			setIsShow(true)
		} else {
			setIsShow(false)
		}
	}, 100)

	useEffect(() => {
		layoutRef.current?.addEventListener("scroll", scrollHandler)
	}, [layoutRef, scrollHandler])

	return (
		<>
			{isShow && (
				<div
					className="fixed right-8 bottom-5 w-10 h-10 flex items-center justify-center rounded-[50%] bg-gray-300 cursor-pointer"
					onClick={() => {
						layoutRef.current?.scrollTo({
							top: 0,
							behavior: "smooth",
						})
					}}
				>
					<CaretUpOutlined
						style={{
							fontSize: "20px",
							color: "#eee",
						}}
					/>
				</div>
			)}
		</>
	)
}

export default BackTop
