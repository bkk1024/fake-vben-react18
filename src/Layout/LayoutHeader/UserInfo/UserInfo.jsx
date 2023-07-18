/*
 * @Author: 二师弟
 * @Date: 2023-06-19 17:49:49
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 23:18:04
 * @Description: 顶部用户信息展示区域
 */
import React, { useState, useRef } from "react"
import headimg from "../../../assets/imgs/headimg.jpg"
import HoverBox from "./HoverBox"
import useMoveEvent from "../../../hooks/MoveEvent"

const UserInfo = () => {
	const user = JSON.parse(
		localStorage.getItem("user") ||
			sessionStorage.getItem("user")
	)

	const [isHover, setIsHover] = useState(false)
	const headimgRef = useRef(null)

	// 头像等的移入移出
	const moveEventHandler = useMoveEvent()

	return (
		<div
			className={`absolute right-3 h-full flex items-center}`}
		>
			<div className="flex items-center justify-between">
				{/* 头像 */}
				<div
					className="w-7 h-7 rounded-[50%] overflow-hidden mr-1 cursor-pointer"
					ref={headimgRef}
					onMouseEnter={() =>
						moveEventHandler.Enter(
							() => setIsHover(true),
							400
						)
					}
					onMouseLeave={() =>
						moveEventHandler.Leave(() =>
							setIsHover(false)
						)
					}
				>
					<img
						className="w-full h-full object-cover"
						src={headimg}
						alt=""
					/>
				</div>
				{/* 名字 */}
				<span className="font-[600]">
					{user?.username || ""}
				</span>
			</div>
			{/* 头像 hover 后出来的弹窗 */}
			<HoverBox
				isShow={isHover}
				onMouseEnter={() =>
					moveEventHandler.Enter(() =>
						setIsHover(true)
					)
				}
				onMouseLeave={() =>
					moveEventHandler.Leave(() =>
						setIsHover(false)
					)
				}
			/>
		</div>
	)
}

export default UserInfo
