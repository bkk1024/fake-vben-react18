/*
 * @Author: 二师弟
 * @Date: 2023-06-19 18:05:12
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-25 17:47:04
 * @Description: 用户头像 hover 后出来的弹窗
 */
import React from "react"
import { logout } from "../../../store/user/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Modal } from "antd"

const { confirm } = Modal

const HoverBox = (props) => {
	const dispatch = useDispatch()
	const nav = useNavigate()

	/**
	 * @description: 退出登录
	 * @return {*}
	 */
	const logoutHandler = () => {
		confirm({
			content: "您确定要退出系统吗？",
			cancelText: "取消",
			okText: "确认",
			okButtonProps: {
				style: {
					backgroundColor: "#faad14",
				},
			},
			onOk: (close) => {
				dispatch(logout())
				nav("/login", { replace: true })
				sessionStorage.clear()
				localStorage.clear()
				close()
			},
		})
	}

	// 列表数据
	const DATA = [
		{
			innerText: "我的任务",
			otherClass: "",
		},
		{
			innerText: "我的消息",
			otherClass: "",
		},
		{
			innerText: "修改密码",
			otherClass: "",
		},
		{
			innerText: "退出系统",
			otherClass: "overflow-hidden",
			click: logoutHandler,
		},
	]

	return (
		<div
			className={`w-32 absolute right-0 top-12 z-[999]  bg-white shadow-lg cursor-pointer origin-top linear duration-300 ${
				props.isShow
					? "opacity-100 scale-100"
					: "opacity-0 scale-y-0"
			}`}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			{DATA.map((item, index) => (
				<div
					key={index}
					className={`h-10 flex items-center justify-center hover:bg-gray-100 ${item.otherClass}`}
					onClick={item?.click}
				>
					{item.innerText}
				</div>
			))}
		</div>
	)
}

export default HoverBox
