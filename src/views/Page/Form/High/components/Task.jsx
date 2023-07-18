/*
 * @Author: 二师弟
 * @Date: 2023-07-07 22:17:10
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 22:44:13
 * @Description: 任务管理
 */
import React from "react"
import FormItem from "./FormItem"
import Card from "../../../../../components/Charts/Card"
import { Row, Input } from "antd"
import { Select, TimePicker } from "antd"

const Task = () => {
	const executorOptions = [
		{
			label: "熊大",
			value: "熊大",
		},
		{
			label: "熊二",
			value: "熊二",
		},
	]

	const chargeOptions = [
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
				label: "任务名",
				name: "taskName",
				rules: [
					{
						required: true,
						message: "请输入任务名",
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
				label: "任务描述",
				name: "taskDesc",
				rules: [
					{
						required: true,
						message: "请输入任务描述",
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
				label: "执行人",
				name: "taskExecutor",
				rules: [
					{
						required: true,
						message: "请选择执行人",
					},
				],
			},
			children: <Select placeholder="请选择" options={executorOptions} />,
		},
		{
			col: {
				span: 6,
			},
			item: {
				label: "责任人",
				name: "taskCharge",
				rules: [
					{
						required: true,
						message: "请选择责任人",
					},
				],
			},
			children: <Select placeholder="请选择" options={chargeOptions} />,
		},
		{
			col: {
				span: 6,
				offset: 3,
			},
			item: {
				label: "生效时间",
				name: "taskTime",
				rules: [
					{
						required: true,
						message: "请选择生效时间",
					},
				],
			},
			children: <TimePicker className="w-full" />,
		},
		{
			col: {
				span: 6,
				offset: 3,
			},
			item: {
				label: "任务类型",
				name: "taskType",
				rules: [
					{
						required: true,
						message: "请选择任务类型",
					},
				],
			},
			children: <Select placeholder="请选择" options={typeOptions} />,
		},
	]

	return (
		<Card title="成员管理" className="p-4">
			<Row justify="between">
				{FormItems.map((item, index) => (
					<FormItem {...item} key={index} />
				))}
			</Row>
		</Card>
	)
}

export default Task
