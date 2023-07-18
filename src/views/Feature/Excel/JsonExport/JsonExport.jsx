/*
 * @Author: 二师弟
 * @Date: 2023-07-05 21:39:20
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 14:14:52
 * @Description: json 数据导出
 */
import React from "react"
import PageContainer from "../../../../components/PageContainer"
import { Table } from "antd"
import { columns, data } from "../data"
import AButton from "../../../../components/AButton"
import useExportToXlsx from "../../../../hooks/ExportToXlsx"

const DATA = JSON.parse(JSON.stringify(data)).map((item, index) => {
	item["key"] = `key-${index + 1}`
	return item
})

const JsonExport = () => {
	const { jsonToXlsx, jsonToMultipleSheetXlsx } = useExportToXlsx()

	const exportDefaultHeader = () => {
		jsonToXlsx({
			data,
			filename: "默认表头.xlsx",
		})
	}

	const exportDiyHeader = () => {
		jsonToXlsx({
			data,
			filename: "自定义表头.xlsx",
			header: {
				id: "ID",
				name: "姓名",
				age: "年龄",
				no: "编号",
				address: "地址",
				beginTime: "开始时间",
				endTime: "结束时间",
			},
			json2sheetOpts: {
				// 指定顺序
				header: ["name", "id"],
			},
		})
	}

	const exportMultipleSheets = () => {
		jsonToMultipleSheetXlsx({
			sheetList: [
				{
					data,
					sheetName: "使用key作为默认头部",
				},
				{
					data,
					header: {
						id: "ID",
						name: "姓名",
						age: "年龄",
						no: "编号",
						address: "地址",
						beginTime: "开始时间",
						endTime: "结束时间",
					},
					json2sheetOpts: {
						// 指定顺序
						header: ["name", "id"],
					},
					sheetName: "自定义头部",
				},
			],
			filename: "导出多个sheet.xlsx",
		})
	}

	const tabelTitle = (
		<div className="flex items-center justify-between">
			<span>基础表格</span>
			<div>
				<AButton type="primary" className="mr-3" onClick={exportDefaultHeader}>
					导出默认头部
				</AButton>
				<AButton type="primary" className="mr-3" onClick={exportDiyHeader}>
					导出自定义头部
				</AButton>
				<AButton type="primary" onClick={exportMultipleSheets}>
					导出多Sheet
				</AButton>
			</div>
		</div>
	)

	return (
		<PageContainer label="导出示例" desc="根据 json 格式的数据进行导出">
			<Table
				columns={columns}
				dataSource={DATA}
				bordered
				title={() => tabelTitle}
				pagination={{
					showQuickJumper: true,
					defaultCurrent: 1,
					total: DATA.length,
					showSizeChanger: true,
				}}
			/>
		</PageContainer>
	)
}

export default JsonExport
