/*
 * @Author: 二师弟
 * @Date: 2023-06-18 22:05:09
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-18 22:15:14
 * @Description: 重置密码表单
 */
import React from "react"
import classes from "./ResetPwdForm.module.css"
import { Button, Input } from "antd"
import {
	PhoneOutlined,
	MessageOutlined,
	UserOutlined,
	UnlockOutlined,
} from "@ant-design/icons"

const ResetPwdForm = (props) => {
	return (
		<div
			className={`${classes.ResetPwdForm} w-[400px]`}
		>
			<h1
				className={`${classes.Title} w-full h-10 text-2xl font-bold text-center mb-3 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_forwards]`}
			>
				重置密码
			</h1>
			<div className={`${classes.LoginContent}`}>
				<Input
					className={`${classes.Account} mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.1s_forwards]`}
					size="large"
					placeholder="账号"
					prefix={<UserOutlined />}
				/>
				<Input
					className={`${classes.Account} mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.2s_forwards]`}
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
					placeholder="新密码"
					prefix={<UnlockOutlined />}
				/>
				<div
					className={`${classes.Btn} flex-col justify-between`}
				>
					<Button
						type="primary"
						block
						className="bg-[#0960bd] h-10 mb-5 select-none  opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.5s_forwards]"
					>
						重置
					</Button>
					<Button
						block
						className="h-10 mb-5  opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.6s_forwards]"
						onClick={() => props.onChangeForm(0)}
					>
						返回
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ResetPwdForm
