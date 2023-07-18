/*
 * @Author: 二师弟
 * @Date: 2023-07-07 16:50:40
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 17:51:22
 * @Description: 步骤二
 */
import React, { useState } from "react"
import { Alert, Divider, Form, Input } from "antd"
import { useSelector } from "react-redux"
import AButton from "../../../../components/AButton"
import TransferInfo from "./components/TransferInfo"

const Step2 = (props) => {
	const step1 = useSelector((state) => state.formStep1)

	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)

	const submit = () => {
		form.validateFields().then(
			(res) => {
				setLoading(true)
				setTimeout(() => {
					setLoading(false)
					props.next()
				}, 2000)
			},
			(err) => {
				console.log(err)
			}
		)
	}

	return (
		<div className="flex justify-center">
			<div className="w-[450px]">
				<Alert type="info" message="确认转账后，资金将直接打入对方账户，无法退回。" showIcon />
				<TransferInfo
					pay={step1.pay}
					receive={step1.receive}
					receiveType={step1.receiveType}
					receiver={step1.receiver}
					amount={step1.amount}
				/>
				<Divider />
				<Form form={form}>
					<Form.Item
						label="支付密码"
						name="password"
						initialValue="123456"
						rules={[
							{
								required: true,
								message: "请输入密码",
							},
						]}
					>
						<Input.Password allowClear placeholder="请输入密码" />
					</Form.Item>
				</Form>
				<div className="flex justify-center">
					<AButton className="mr-3" onClick={props.prev}>
						上一步
					</AButton>
					<AButton type="primary" onClick={submit} loading={loading}>
						提交
					</AButton>
				</div>
			</div>
		</div>
	)
}

export default Step2
