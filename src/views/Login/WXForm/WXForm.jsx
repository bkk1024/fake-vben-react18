/*
 * @Author: 二师弟
 * @Date: 2023-06-18 21:42:36
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-19 22:02:23
 * @Description: 描述
 */
import React, { useState } from "react"
import QRcode from "../../../assets/imgs/testQrcode.png"
import classes from "./WXForm.module.css"
import { Button, Divider, Checkbox } from "antd"

const WXForm = (props) => {
	const [isCheck, setIsCheck] = useState(false)

	return (
		<div className={`${classes.WXForm} w-[400px]`}>
			<h1
				className={`${classes.Title} w-full h-10 text-2xl font-bold text-center mb-3 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_forwards]`}
			>
				微信登录
			</h1>
			<div
				className={`${classes.QRcode} w-full h-[200px] flex justify-center mb-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.1s_forwards]`}
			>
				{isCheck && (
					<div
						className="absolute flex items-center justify-center w-[200px] h-[200px] bg-[rgba(0,0,0,0.7)] text-white cursor-pointer"
						onClick={() =>
							setIsCheck((prevState) => !prevState)
						}
					>
						点击刷新二维码
					</div>
				)}
				<img
					className="h-full"
					src={QRcode}
					alt="二维码加载失败"
				/>
			</div>
			<Checkbox
				checked={isCheck}
				onChange={() =>
					setIsCheck((prevState) => !prevState)
				}
				className="select-none"
			>
				测试二维码失效
			</Checkbox>
			<Divider
				plain
				className="opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.2s_forwards]"
			>
				微信扫码登录
			</Divider>
			<Button
				block
				className="h-10 mt-5 opacity-0 translate-x-8 animate-[itemEntryX_0.5s_0.3s_forwards]"
				onClick={() => props.onChangeForm(0)}
			>
				返回
			</Button>
		</div>
	)
}

export default WXForm
