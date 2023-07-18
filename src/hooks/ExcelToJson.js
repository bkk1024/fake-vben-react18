/*
 * @Author: 二师弟
 * @Date: 2023-07-06 16:42:09
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 18:41:23
 * @Description: 将 excel 文件转换为 json 格式数据
 */

/**
 * 转换后返回的 json 格式如下：
 * [
 *  // 表格数据一
 *  {
 *    title: "", // 表格标题
 *    data: [{}, {}, ...], // 表格渲染元数据
 *    columns: [
 *     {
 *       title: "",
 *       dataIndex: "",
 *       width: 100,
 *     },
 *     ...
 *    ], // 表格列的配置
 *  },
 *  // 其余表格数据
 * ...
 * ]
 */

import { message } from "antd"
import { read, utils } from "xlsx"

const useExcelToJson = () => {
	/**
	 * @description: 获取 excel 数据
	 * @param {*} res ArrayBuffer 数据
	 * @return {*} Array
	 */
	const getExcelData = (res) => {
		const workbook = read(res)
		const { Sheets, SheetNames } = workbook
		const data = []
		// 每个 excel 有多个表格
		for (const sheetName of SheetNames) {
			const worksheet = Sheets[sheetName]
			let sheetData = utils.sheet_to_json(worksheet, {
				raw: true,
			})
			// antd 的 table 组件中的 columns 属性
			const columns = [
				{
					title: "序号",
					dataIndex: "序号",
					width: 80,
					fixed: "left",
				},
			]
			for (const key in sheetData[0]) {
				columns.push({
					title: key,
					dataIndex: key,
					width: 100,
				})
			}
			// 表格元数据
			sheetData = sheetData.map((item, index) => {
				if (!item["key"]) item["key"] = `key-${index}`
				if (!item["序号"]) item["序号"] = index + 1
				return item
			})
			data.push({
				title: sheetName,
				data: sheetData,
				columns: columns,
			})
		}
		return data
	}

	/**
	 * @description: excel 文件转 json 数据
	 * @param {*} file excel 文件
	 * @return {*} Promise
	 */
	const excelToJson = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.readAsArrayBuffer(file)
			reader.onload = (e) => {
				try {
					const data = getExcelData(e.target.result)
					message.success(`${file.name} 读取成功`)
					resolve(data)
				} catch (err) {
					message.error(`${file.name} 读取失败`)
					reject(err)
				}
			}
		})
	}

	return { excelToJson }
}

export default useExcelToJson
