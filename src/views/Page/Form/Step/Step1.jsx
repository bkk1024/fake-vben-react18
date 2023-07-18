/*
 * @Author: 二师弟
 * @Date: 2023-07-07 15:02:35
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 16:50:22
 * @Description: 步骤一
 */
import React, { useState } from "react"
import { Form, Divider, Input, Row, Col, Select, Space } from "antd"
import AButton from "../../../../components/AButton"
import { useSelector, useDispatch } from "react-redux"
import { setStep1Info } from "../../../../store/form/step1"

const { Item, useForm } = Form

const Step1 = (props) => {
	const [form] = useForm()

	const step1 = useSelector((state) => state.formStep1)
	const dispatch = useDispatch()

	const [select, setSelect] = useState(step1.receiveType || "支付宝")
	const selectChange = (e) => {
		setSelect(e)
	}

	const initValues = {
		payAccount: step1.pay || "test123@123.com",
		receiveAccount: step1.receive || "test456@123.com",
		receiverName: step1.receiver || "二师弟",
		amount: step1.amount || "500",
	}

	const selectOptions = [
		{
			label: "支付宝",
			value: "支付宝",
		},
		{
			label: "银联",
			value: "银联",
		},
	]

	const next = () => {
		form.validateFields().then(
			(res) => {
				console.log(res)
				dispatch(
					setStep1Info({
						pay: res.payAccount,
						receive: res.receiveAccount,
						receiveType: select,
						receiver: res.receiverName,
						amount: res.amount,
					})
				)
				props.next()
			},
			(err) => {
				console.log(err)
			}
		)
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-[450px]">
				<Form form={form}>
					<Row>
						{/* 付款账户 */}
						<Col span={24}>
							<Item
								label="付款账户"
								name="payAccount"
								initialValue={initValues.payAccount}
								rules={[
									{
										required: true,
										message: "请输入付款账户",
									},
								]}
							>
								<Input placeholder="请输入付款账户" />
							</Item>
						</Col>
						{/* 收款账户 */}
						<Col span={24}>
							<Item
								label="收款账户"
								name="receiveAccount"
								initialValue={initValues.receiveAccount}
								rules={[
									{
										required: true,
										message: "请输入收款账户",
									},
								]}
							>
								<Space.Compact style={{ width: "100%" }}>
									<Select
										style={{ width: "150px" }}
										defaultValue={select}
										options={selectOptions}
										onChange={selectChange}
									/>
									<Input defaultValue={initValues.receiveAccount} placeholder="请输入收款账户" />
								</Space.Compact>
							</Item>
						</Col>
						{/* 收款人姓名 */}
						<Col span={24}>
							<Item
								label="收款人姓名"
								name="receiverName"
								initialValue={initValues.receiverName}
								rules={[
									{
										required: true,
										message: "请输入收款人姓名",
									},
								]}
							>
								<Input allowClear placeholder="请输入收款人姓名" />
							</Item>
						</Col>
						{/* 转账金额 */}
						<Col span={24}>
							<Item
								label="转账金额"
								name="amount"
								initialValue={initValues.amount}
								rules={[
									{
										required: true,
										message: "请输入转账金额，必须为数字且大于0",
										pattern: /^[1-9]\d*$/, // 正则检验非0正整数
									},
								]}
							>
								<Input allowClear placeholder="请输入转账金额" prefix={"￥"} />
							</Item>
						</Col>
						<Col span={24} className="flex justify-center">
							<AButton type="primary" onClick={next}>
								下一步
							</AButton>
						</Col>
					</Row>
				</Form>
			</div>
			<Divider />
			<div>
				<h3 className="text-xl">说明</h3>
				<br />
				<p>转账到支付宝账户</p>
				<p>
					如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
				</p>
				<br />
				<p>转账到支付宝账户</p>
				<p>
					如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
				</p>
			</div>
		</div>
	)
}

export default Step1
