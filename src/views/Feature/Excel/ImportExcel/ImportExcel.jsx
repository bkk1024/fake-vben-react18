/*
 * @Author: 二师弟
 * @Date: 2023-07-06 14:21:13
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 18:39:26
 * @Description: excel 数据导入
 */
import React, { useState } from "react"
import PageContainer from "../../../../components/PageContainer"
import { Upload, Table } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import useExcelToJson from "../../../../hooks/ExcelToJson"
import Card from "../../../../components/Charts/Card"

const { Dragger } = Upload

const ImportExcel = () => {
	const [tableData, setTableData] = useState([])

	const { excelToJson } = useExcelToJson()

	const props = {
		name: "file",
		accept: ".xlsx,.xls,.csv",
		multiple: true,
		showUploadList: false,
		action: "",
		customRequest: (e) => {
			excelToJson(e.file).then((res) => {
				setTableData((prevState) => {
					return [...prevState, ...res]
				})
			})
		},
	}

	const reTable = (options) => {
		const { item, index } = options
		const { data, columns } = item
		return (
			<Table
				key={index}
				columns={columns}
				dataSource={data}
				bordered
				pagination={{
					showQuickJumper: true,
					defaultCurrent: 1,
					total: data.length,
					showSizeChanger: true,
				}}
				scroll={{ y: 400, x: 500 }}
			/>
		)
	}

	const tab = tableData.map((item, index) => {
		const table = reTable({ item, index })
		const option = {
			key: index,
			label: item.title,
			children: table,
		}
		return option
	})

	return (
		<PageContainer label="excel数据导入示例">
			<Dragger {...props}>
				<p className="ant-upload-drag-icon">
					<InboxOutlined />
				</p>
				<p className="ant-upload-text">点击或将文件拖到此处上传</p>
				<p className="ant-upload-hint">支持单个文件或批量上传</p>
			</Dragger>
			{Boolean(tableData.length) && (
				<Card
					className="mt-4 py-4 max-h-[650px]"
					tab={true}
					tabPosition="top"
					hideAdd
					items={tab}
					success={true}
				/>
			)}
		</PageContainer>
	)
}

export default ImportExcel
