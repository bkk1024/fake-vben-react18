/*
 * @Author: 二师弟
 * @Date: 2023-07-06 13:41:44
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 14:18:25
 * @Description: 数组格式数据导出
 */
import React from "react"
import PageContainer from "../../../../components/PageContainer"
import { Table } from "antd"
import { data, arrHeader, columns, arrData } from "../data"
import AButton from "../../../../components/AButton"
import useExportToXlsx from "../../../../hooks/ExportToXlsx"

const DATA = JSON.parse(JSON.stringify(data)).map((item, index) => {
	item["key"] = `key-${index + 1}`
	return item
})

const ArrayExport = () => {
	const { arrayToXlsx, arrayToMultipleSheetXlsx } = useExportToXlsx()

	const exportDefault = () => {
		arrayToXlsx({
			data: arrData,
			header: arrHeader,
			filename: "二维数组导出excel.xlsx",
		})
	}

	const exportMultipleSheets = () => {
		arrayToMultipleSheetXlsx({
			sheetList: [
				{
					data: arrData,
					header: arrHeader,
					filename: "sheet1.xlsx",
				},
				{
					data: arrData,
					header: arrHeader,
					filename: "sheet2.xlsx",
				},
			],
			filename: "二维数组导出excel-多sheets.xlsx",
		})
	}

	const tabelTitle = (
		<div className="flex items-center justify-between">
			<span>基础表格</span>
			<div>
				<AButton type="primary" className="mr-3" onClick={exportDefault}>
					导出
				</AButton>
				<AButton type="primary" onClick={exportMultipleSheets}>
					导出多Sheet
				</AButton>
			</div>
		</div>
	)

	return (
		<PageContainer label="导出示例" desc="根据数组格式的数据进行导出">
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

export default ArrayExport
