/*
 * @Author: 二师弟
 * @Date: 2023-07-05 15:26:26
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 15:58:53
 * @Description: 导出示例，可以选择导出格式
 */
import React from "react"
import PageContainer from "../../../../components/PageContainer"
import { Table } from "antd"
import { columns, data } from "../data"
import AButton from "../../../../components/AButton"
import useConfirm from "../../../../hooks/Confirm"
import useExportToXlsx from "../../../../hooks/ExportToXlsx"
import ConfirmContent from "./ConfirmContent"

const DATA = JSON.parse(JSON.stringify(data)).map((item, index) => {
	item["key"] = `key-${index + 1}`
	return item
})

const ChooseExport = () => {
	const { info } = useConfirm()

	const { jsonToXlsx } = useExportToXlsx()

	const confirm = (options) => {
		jsonToXlsx(options)
	}

	const openModal = () => {
		info({
			title: "导出数据",
			closable: true,
			icon: <></>,
			content: <ConfirmContent json={data} handler={confirm} />,
			// onOk: exportXlsx,
			footer: null,
		})
	}

	const tabelTitle = (
		<div className="flex items-center justify-between">
			<span>基础表格</span>
			<AButton type="primary" onClick={openModal}>
				导出
			</AButton>
		</div>
	)

	return (
		<PageContainer label="导出示例" desc="可以选择导出格式">
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

export default ChooseExport
