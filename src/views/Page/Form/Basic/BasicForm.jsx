/*
 * @Author: 二师弟
 * @Date: 2023-07-06 18:51:54
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 14:28:03
 * @Description: 基础表单页面
 */
import React from "react"
import PageContainer from "../../../../components/PageContainer"
import Card from "./../../../../components/Charts/Card"
import { Form, Input, DatePicker, Row, Col, Radio, message } from "antd"
import AButton from "./../../../../components/AButton"

const { Item, useForm } = Form
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Group } = Radio

const BasicForm = () => {
	const [form] = useForm()

	const submit = () => {
		// 表单验证
		form.validateFields().then(
			(res) => {
				// res[Item.name] 就是表单每一项的值
				console.log(res)
				console.log("标题", res.title)
				console.log("开始日期", new Date(res.date[0]))
				console.log("结束日期", new Date(res.date[1]))
				console.log("客户", res.customer)
				console.log("权重", res.weight)
				console.log("目标描述", res["target-desc"])
				console.log("衡量标准", res.metrics)
				console.log("邀评人", res["invite-critics"])
				console.log("目标公开", res["public-status"])
			},
			(err) => {
				const { errorFields } = err
				message.error(errorFields[0].errors)
				console.log(err)
			}
		)
	}

	const reset = () => {
		form.resetFields()
	}

	return (
		<PageContainer
			label="基础表单"
			desc="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景"
		>
			<Card className="p-4">
				{/* labelCol 表示 Item 的 label 在 Item 这个容器中赵局的栅格数（总共24） */}
				<Form form={form} labelCol={{ span: 8 }}>
					<Row>
						<Col span={8}>
							<Item
								label="标题"
								name="title"
								rules={[
									{
										required: true,
										message: "请输入标题",
									},
								]}
							>
								<Input placeholder="给目标起个名字" />
							</Item>
						</Col>
						<Col span={8}>
							<Item
								label="起止日期"
								name="date"
								rules={[
									{
										required: true,
										message: "请选择开始和结束日期",
									},
								]}
							>
								<RangePicker />
							</Item>
						</Col>
						<Col span={8}>
							<Item label="客户" name="customer" tooltip="目标的服务对象">
								<Input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号 " />
							</Item>
						</Col>
						<Col span={8}>
							<Item label="权重" name="weight">
								<Input placeholder="请输入" />
							</Item>
						</Col>
						<Col span={8}>
							<Item
								label="目标描述"
								name="target-desc"
								rules={[
									{
										required: true,
										message: "请输入目标描述",
									},
								]}
							>
								<TextArea placeholder="请输入你的阶段性工作目标" rows={4} />
							</Item>
						</Col>
						<Col span={8}>
							<Item
								label="衡量标准"
								name="metrics"
								rules={[
									{
										required: true,
										message: "请输入衡量标准",
									},
								]}
							>
								<TextArea placeholder="请输入衡量标准" rows={4} />
							</Item>
						</Col>
						<Col span={8}>
							<Item label="邀评人" name="invite-critics">
								<Input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />
							</Item>
						</Col>
						<Col span={16}>
							<Item
								label="目标公开"
								name="public-status"
								extra="客户、邀评人默认被分享"
								labelCol={{ span: 4, offset: 5 }}
							>
								<Group name="public-status-radio">
									<Radio value="公开">公开</Radio>
									<Radio value="部分公开">部分公开</Radio>
									<Radio value="不公开">不公开</Radio>
								</Group>
							</Item>
						</Col>
						<Col span={24}>
							<span className="float-right">
								<AButton className="mr-3" onClick={reset}>
									重置
								</AButton>
								<AButton type="primary" onClick={submit}>
									提交
								</AButton>
							</span>
						</Col>
					</Row>
				</Form>
			</Card>
		</PageContainer>
	)
}

export default BasicForm
