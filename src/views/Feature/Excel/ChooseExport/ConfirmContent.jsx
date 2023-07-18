/*
 * @Author: 二师弟
 * @Date: 2023-07-05 20:25:42
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 21:19:33
 * @Description: 点击导出弹出的对话框的内容
 */
import React from "react"
import { Form, Input, Select, Modal } from "antd"
import AButton from "../../../../components/AButton"
import { message } from "antd"

const { Item, useForm } = Form
const { destroyAll } = Modal

const ConfirmContent = (props) => {
	const { handler, json } = props
	const rules = [
		{
			required: true,
			message: "请输入文件名",
		},
	]

	const [form] = useForm()

	const submit = () => {
		form.validateFields().then(
			(values) => {
				const { filename, filetype } = values
				const fullFilename = filename + "." + filetype
				handler({
					data: json,
					filename: fullFilename,
					write2excelOpts: {
						bookType: filetype,
					},
				})
				destroyAll()
				// console.log("values", values)
			},
			(err) => {
				const errInfo = err.errorFields[0].errors[0]
				message.error(errInfo)
				// console.log("err", err)
			}
		)
	}

	return (
		<Form name="basic" initialValues={{ filetype: "xlsx" }} form={form} className="ml-5">
			<Item label="文件名" name="filename" rules={rules}>
				<Input placeholder="请输入" />
			</Item>
			<Item label="文件类型" name="filetype" rules={rules}>
				<Select
					options={[
						{
							value: "xlsx",
							label: "xlsx",
						},
						{
							value: "html",
							label: "html",
						},
						{
							value: "csv",
							label: "csv",
						},
						{
							value: "txt",
							label: "txt",
						},
					]}
				/>
			</Item>
			<span className="float-right">
				<AButton className="mr-3" onClick={destroyAll}>
					取消
				</AButton>
				<AButton type="primary" onClick={submit}>
					确认
				</AButton>
			</span>
		</Form>
	)
}

export default ConfirmContent
