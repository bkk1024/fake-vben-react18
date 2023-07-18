/*
 * @Author: 二师弟
 * @Date: 2023-07-07 17:53:19
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-08 16:25:47
 * @Description: 高级表单
 */
import React from "react"
import PageContainer from "../../../../components/PageContainer"
import AButton from "../../../../components/AButton"
import Stash from "./components/Stash"
import { Form } from "antd"
import Task from "./components/Task"
import Member from "./components/Member"

const { useForm } = Form

const HighForm = () => {
	const [form] = useForm()

	const submit = () => {
		form.validateFields().then(
			(res) => {
				console.log(res)
			},
			(err) => {
				console.log(err)
			}
		)
	}

	const footer = (
		<div className="w-full shadow-[0_-3px_10px_-3px_#999] bg-white p-2 px-8" dir="rtl">
			<AButton type="primary" onClick={submit}>
				提交
			</AButton>
		</div>
	)

	return (
		<PageContainer
			label="高级表单"
			desc="高级表单常见于一次性输入和提交大批量数据的场景"
			footer={footer}
		>
			<Form form={form} layout="vertical" scrollToFirstError={true}>
				<Stash />
				<br />
				<Task />
				<br />
				<Member />
				{/* 这个div垫起下方按钮遮住的区域 */}
				<div className="mb-14"></div>
			</Form>
		</PageContainer>
	)
}

export default HighForm
