/*
 * @Author: 二师弟
 * @Date: 2023-06-18 15:12:51
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 16:12:05
 * @Description: 登录页面
 */
import React, {
	useCallback,
	useState,
} from "react"
import { Card } from "antd"
// import classes from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm"
import RegisterForm from "./RegisterForm/RegisterForm"
import PhoneForm from "./PhoneForm/PhoneForm"
import WXForm from "./WXForm/WXForm"
import ResetPwdForm from "./ResetPwdForm/ResetPwdForm"
import logo from "../../assets/imgs/logo.png"

const LOGIN_TYPE = [
	"login",
	"register",
	"phone",
	"WX",
	"QQ",
	// 重置密码
	"resetPwd",
]

const Login = () => {
	const [loginType, setLoginType] = useState(
		LOGIN_TYPE[0]
	)

	/**
	 * @description: 改变展示的表单组件，传递给子组件使用
	 * @param {typeNum} Number
	 */
	const changeFormHandler = (typeNum) => {
		setLoginType(LOGIN_TYPE[typeNum])
	}

	/**
	 * @description: 根据组件类型返回相应表单组件
	 * @param {*} useCallback
	 * @return {*} ReactElement
	 */
	const LoginComponent = useCallback(() => {
		switch (loginType) {
			case "login":
				return (
					<LoginForm
						onChangeForm={changeFormHandler}
					/>
				)
			case "register":
				return (
					<RegisterForm
						onChangeForm={changeFormHandler}
					/>
				)
			case "WX":
				return (
					<WXForm onChangeForm={changeFormHandler} />
				)
			case "phone":
				return (
					<PhoneForm
						onChangeForm={changeFormHandler}
					/>
				)
			case "resetPwd":
				return (
					<ResetPwdForm
						onChangeForm={changeFormHandler}
					/>
				)
			default:
				return <LoginForm />
		}
	}, [loginType])

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-[#99bcac]">
			<div className="absolute top-4 left-4 h-6 flex justify-between">
				<img
					className="h-full"
					src={logo}
					alt="图片加载失败"
				/>
				<h1 className="ml-2 text-xl text-[#fff]">
					Vben Mine
				</h1>
			</div>
			<Card>{LoginComponent()}</Card>
		</div>
	)
}

export default Login
