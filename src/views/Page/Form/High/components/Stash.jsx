/*
 * @Author: 二师弟
 * @Date: 2023-07-07 21:18:44
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 22:22:25
 * @Description: 仓库管理
 */
import React from "react"
import Card from "../../../../../components/Charts/Card"
import { Row, Input, DatePicker } from "antd"
import { Select } from "antd"
import FormItem from "./FormItem"

const { RangePicker } = DatePicker

const Stash = () => {
	const adminOptions = [
		{
			label: "熊大",
			value: "熊大",
		},
		{
			label: "熊二",
			value: "熊二",
		},
	]

	const approverOptions = [
		{
			label: "熊大",
			value: "熊大",
		},
		{
			label: "熊二",
			value: "熊二",
		},
	]

	const typeOptions = [
		{
			label: "公开",
			value: "公开",
		},
		{
			label: "私密",
			value: "私密",
		},
	]

	const FormItems = [
		{
			col: {
				span: 6,
			},
			item: {
				label: "仓库名",
				name: "stashName",
				rules: [
					{
						required: true,
						message: "请输入仓库名",
					},
				],
			},
			children: <Input placeholder="请输入" />,
		},
		{
			col: {
				span: 6,
				offset: 3,
			},
			item: {
				label: "仓库域名",
				name: "stashDomain",
				rules: [
					{
						required: true,
						message: "请输入域名",
					},
				],
			},
			children: <Input placeholder="请输入" addonBefore="http://" addonAfter=".com" />,
		},
		{
			col: {
				span: 6,
				offset: 3,
			},
			item: {
				label: "仓库管理员",
				name: "stashAdmin",
				rules: [
					{
						required: true,
						message: "请选择仓库管理员",
					},
				],
			},
			children: <Select placeholder="请选择" options={adminOptions} />,
		},
		{
			col: {
				span: 6,
			},
			item: {
				label: "审批人",
				name: "stashApprover",
				rules: [
					{
						required: true,
						message: "请选择审批人",
					},
				],
			},
			children: <Select placeholder="请选择" options={approverOptions} />,
		},
		{
			col: {
				span: 6,
				offset: 3,
			},
			item: {
				label: "生效日期",
				name: "stashDate",
				rules: [
					{
						required: true,
						message: "请选择生效日期",
					},
				],
			},
			children: <RangePicker />,
		},
		{
			col: {
				span: 6,
				offset: 3,
			},
			item: {
				label: "仓库类型",
				name: "stashType",
				rules: [
					{
						required: true,
						message: "请选择仓库类型",
					},
				],
			},
			children: <Select placeholder="请选择" options={typeOptions} />,
		},
	]

	return (
		<Card title="仓库管理" className="p-4">
			<Row justify="between">
				{FormItems.map((item, index) => (
					<FormItem {...item} key={index} />
				))}
			</Row>
		</Card>
	)
}

export default Stash
