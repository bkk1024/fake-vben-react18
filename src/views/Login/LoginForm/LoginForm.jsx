/*
 * @Author: 二师弟
 * @Date: 2023-06-18 17:17:20
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 18:26:38
 * @Description: 登录表单组件
 */
import React, { useState } from "react"
import {
	UserOutlined,
	UnlockOutlined,
	WechatOutlined,
	MobileOutlined,
	QqOutlined,
} from "@ant-design/icons"
import {
	Input,
	Checkbox,
	Button,
	Divider,
	notification,
} from "antd"
import classes from "./LoginForm.module.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
import { login } from "../../../store/user/userSlice"

// 这里是假的用户
const USER = {
	username: "ershidi",
	password: "123123",
	token: "fakeToken",
}

const LoginForm = (props) => {
	const [isCheck, setIsCheck] = useState(false)
	const [username, setUsername] = useState(
		USER.username
	)
	const [password, setPassword] = useState(
		USER.password
	)
	const dispatch = useDispatch()
	// checkbox 点击
	const onChangeHandler = (e) => {
		setIsCheck(e.target.checked)
	}

	const nav = useNavigate()
	const loginHandler = () => {
		const save = new Date().getTime()
		// 过期时间设置为 7 天，单位 ms
		const time = 7 * 24 * 60 * 60 * 1000
		// const time = 60 * 1000
		const expired = save + time
		dispatch(
			login({
				token: USER.token,
				user: {
					username,
					save,
					expired,
				},
				isSave: isCheck,
			})
		)
		const inputUrl =
			sessionStorage.getItem("inputUrl")
		nav(inputUrl || "/", { replace: true })
		// console.log("登录成功")
		// 登录成功提示框
		notification.success({
			message: "登录成功",
			description: `欢迎回来，${username}`,
			duration: 1,
		})
	}

	return (
		<div
			className={`${classes.LoginForm} w-[400px]`}
		>
			<h1
				className={`${classes.Title} w-full h-10 text-2xl font-bold text-center mb-3 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_forwards]`}
			>
				登录
			</h1>
			<div
				className={`${classes.LoginContent} h-48 flex flex-col justify-between`}
			>
				<Input
					className={`${classes.Account} opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.1s_forwards]`}
					size="large"
					placeholder="账号"
					prefix={<UserOutlined />}
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input.Password
					className={`${classes.Password} opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.2s_forwards]`}
					size="large"
					placeholder="密码"
					prefix={<UnlockOutlined />}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div
					className={`${classes.ContentOptions} flex justify-between opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.3s_forwards]`}
				>
					<Checkbox
						checked={isCheck}
						onChange={onChangeHandler}
						className="select-none"
					>
						记住我
					</Checkbox>
					<span
						className="text-blue-600 cursor-pointer select-none"
						onClick={() => props.onChangeForm(5)}
					>
						忘记密码？
					</span>
				</div>
				<div
					className={`${classes.Btn} flex justify-between opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.4s_forwards]`}
				>
					<Button
						type="primary"
						block
						className="bg-[#0960bd] h-10 mr-3 select-none"
						onClick={loginHandler}
					>
						登录
					</Button>
					<Button
						className="h-10"
						onClick={() => props.onChangeForm(1)}
					>
						注册
					</Button>
				</div>
			</div>
			<div
				className={`${classes.OtherLogin} opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.5s_forwards]`}
			>
				<Divider plain>其他登录方式</Divider>
				<div
					className={`${classes.OtherLoginIcon} flex justify-around cursor-pointer opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.6s_forwards]`}
				>
					<MobileOutlined
						className="hover:text-[#0960bd]"
						style={{ fontSize: "25px" }}
						onClick={() => props.onChangeForm(2)}
					/>
					<WechatOutlined
						className="hover:text-[#0960bd]"
						style={{ fontSize: "25px" }}
						onClick={() => props.onChangeForm(3)}
					/>
					<QqOutlined
						className="hover:text-[#0960bd]"
						style={{ fontSize: "25px" }}
					/>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
