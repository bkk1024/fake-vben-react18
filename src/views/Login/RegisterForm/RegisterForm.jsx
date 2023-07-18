/*
 * @Author: 二师弟
 * @Date: 2023-06-18 18:02:01
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-18 22:14:51
 * @Description: 注册表单组件
 */
import React, { useState } from "react"
import classes from "./RegisterForm.module.css"
import { Input, Button } from "antd"
import {
	UserOutlined,
	UnlockOutlined,
	PhoneOutlined,
	MessageOutlined,
	CheckCircleOutlined,
} from "@ant-design/icons"
import { Checkbox } from "antd"

const RegisterForm = (props) => {
	const [isCheck, setIsCheck] = useState(false)

	// checkbox 点击
	const onChangeHandler = (e) => {
		setIsCheck(e.target.checked)
	}

	return (
		<div
			className={`${classes.RegisterForm} w-[400px]`}
		>
			<h1
				className={`${classes.Title} w-full h-10 text-2xl font-bold text-center mb-3 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_forwards]`}
			>
				注册
			</h1>
			<div className={`${classes.RegisterContent}`}>
				<Input
					className={`${classes.Account} mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.1s_forwards]`}
					size="large"
					placeholder="账号"
					prefix={<UserOutlined />}
				/>
				<Input
					className={`${classes.PhoneNumber} mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.2s_forwards]`}
					size="large"
					placeholder="手机号码"
					prefix={<PhoneOutlined />}
				/>
				<div
					className={`${classes.MessageBox} mb-5 flex justify-between opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.3s_forwards]`}
				>
					<Input
						className={`${classes.MessageCode} mr-3`}
						size="large"
						placeholder="短信验证码"
						prefix={<MessageOutlined />}
					/>
					<Button size="large">获取验证码</Button>
				</div>
				<Input.Password
					className={`${classes.Password} mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.4s_forwards]`}
					size="large"
					placeholder="密码"
					prefix={<UnlockOutlined />}
				/>
				<Input.Password
					className={`${classes.PasswordConfirm} mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.5s_forwards]`}
					size="large"
					placeholder="确认密码"
					prefix={<CheckCircleOutlined />}
				/>
				<Checkbox
					checked={isCheck}
					onChange={onChangeHandler}
					className="select-none mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.6s_forwards]"
				>
					我同意xxx隐私协议
				</Checkbox>
				<div
					className={`${classes.BtnBox} flex flex-col`}
				>
					<Button
						type="primary"
						className="bg-[#0960bd] h-10 mb-3 select-none opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.7s_forwards]"
					>
						注册
					</Button>
					<Button
						className="h-10 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.8s_forwards]"
						onClick={() => props.onChangeForm(0)}
					>
						返回
					</Button>
				</div>
			</div>
		</div>
	)
}

export default RegisterForm
