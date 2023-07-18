/*
 * @Author: 二师弟
 * @Date: 2023-07-08 16:23:51
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-10 20:51:39
 * @Description: 成员管理
 */
import React, { useCallback } from "react"
import Card from "../../../../../components/Charts/Card"
import { Table, Input } from "antd"
import AButton from "../../../../../components/AButton"
import { useState } from "react"
import { PlusOutlined } from "@ant-design/icons"
import { message } from "antd"

const Member = () => {
	// 每行数据模板
	const initData = (index) => {
		return {
			key: `key-${index + 1}`,
			name: "John Brown" + (index + 1),
			id: "0000" + (index + 1),
			section: `New York No.${index + 1} Lake Park`,
		}
	}

	/**
	 * @description: 点击编辑后展示的组件
	 * @return {*}
	 */
	const editElements = ({ title, dataIndex, isEditing, record, children, ...restProps }) => {
		const key = columnsTitleKey[title]

		return (
			<td {...restProps}>
				{isEditing ? (
					<div>
						<Input className="member-edit-input" placeholder="请输入" defaultValue={record[key]} />
					</div>
				) : (
					children
				)}
			</td>
		)
	}

	/**
	 * @description: 这是操作列要渲染的组件
	 * @param {*} _ 当前行的值
	 * @param {*} data 当前行数据
	 * @param {*} index 当前行索引
	 * @return {*}
	 */
	const operationCom = (_, data, index) => {
		const editing = isEditing(data.key)

		return (
			<>
				{!editing && (
					<span>
						<AButton type="primary" className="mr-3" onClick={() => onEdit(data)}>
							编辑
						</AButton>
						<AButton type="danger" onClick={() => onDel(index)}>
							删除
						</AButton>
					</span>
				)}
				{editing && (
					<span>
						<AButton type="success" className="mr-3" onClick={() => onSave(index)}>
							保存
						</AButton>
						<AButton onClick={() => onCancel(index)}>取消</AButton>
					</span>
				)}
			</>
		)
	}

	const columns = [
		{
			title: "成员姓名",
			dataIndex: "name",
			key: "name",
			width: "100%",
			editable: true,
		},
		{
			title: "工号",
			dataIndex: "id",
			key: "id",
			width: "100%",
			editable: true,
		},
		{
			title: "所属部门",
			dataIndex: "section",
			key: "section",
			width: "100%",
			editable: true,
		},
		{
			title: "操作",
			dataIndex: "operation",
			key: "operation",
			width: "100%",
			render: operationCom,
		},
	]

	// {"成员姓名": "name", "工号": "id", "所属部门": "section"}
	const columnsTitleKey = (function () {
		let obj = {}
		columns.forEach((item) => {
			obj[item.title] = item.key
		})
		return obj
	})()

	const mergedColumns = columns.map((item) => {
		if (!item.editable) return item
		return {
			...item,
			onCell: (record) => ({
				record,
				title: item.title,
				dataIndex: item.title,
				isEditing: isEditing(record.key),
			}),
		}
	})

	// 表格数据
	const [tableData, setTableData] = useState(
		new Array(3).fill(0).map((_, index) => {
			return initData(index)
		})
	)

	// 保存每次编辑的表格行的 key
	const [editingKey, setEditingKey] = useState("")

	const onEdit = (data) => {
		setEditingKey(data.key)
		// memberChange.saveMember(data)
	}

	const getInputsValue = () => {
		const inputs = document.querySelectorAll(".member-edit-input")
		const name = inputs[0].value
		const id = inputs[1].value
		const section = inputs[2].value
		return { name, id, section }
	}

	const onCancel = useCallback(
		(index) => {
			const { name, id, section } = getInputsValue()
			if (
				(!name || !id || !section) &&
				(!tableData[index].name || !tableData[index].id || !tableData[index].section)
			) {
				setTableData((prevState) => {
					const newState = [...prevState]
					newState.splice(index, 1)
					return newState
				})
			}
			setEditingKey("")
		},
		[tableData]
	)

	const onDel = (index) => {
		setTableData((prevState) => {
			const newData = [...prevState]
			newData.splice(index, 1)
			return newData
		})
	}

	const onSave = useCallback(
		(index) => {
			const { name, id, section } = getInputsValue()
			if (!name || !id || !section) {
				message.error("成员姓名、工号、所属部门不能为空")
				return
			}
			// memberChange.saveMember({ name, id, section })
			if (index < tableData.length) {
				setTableData((prevState) => {
					const newState = [...prevState]
					const key = newState[index].key
					newState.splice(index, 1, { name, id, section, key })
					return newState
				})
			} else {
				setTableData((prevState) => {
					const newState = [...prevState]
					const key = newState[index].key
					newState.push({ name, id, section, key })
					return newState
				})
			}
			setEditingKey("")
		},
		[setTableData, tableData.length]
	)

	const onAdd = () => {
		const len = tableData.length
		const key = `key-${len + 1}`
		setTableData((prevState) => {
			const newData = [...prevState]
			newData.push({
				key: key,
				name: "",
				id: "",
				section: "",
			})
			return newData
		})
		setEditingKey(key)
	}

	const isEditing = (key) => {
		return editingKey === key
	}

	return (
		<Card title="成员管理">
			<Table
				columns={mergedColumns}
				dataSource={tableData}
				components={{
					body: {
						cell: editElements,
					},
				}}
				footer={() => (
					<div dir="rtl">
						<AButton icon={<PlusOutlined />} dir="ltr" onClick={onAdd}>
							新增成员
						</AButton>
					</div>
				)}
				scroll={{
					y: 400,
				}}
			/>
		</Card>
	)
}

export default Member
