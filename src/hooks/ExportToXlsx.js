/*
 * @Author: 二师弟
 * @Date: 2023-07-05 17:53:52
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 15:09:21
 * @Description: 数据（json、array）导出 xlsx 文件钩子。xlsx 库可以导出 xlsx、html、csv、txt 格式文件
 */
import * as xlsx from "xlsx"

const useExportToXlsx = () => {
	const { writeFile, utils } = xlsx

	/**
	 * @description: json 数据导出单个 sheet
	 * @param {array} data 要写入的数据
	 * @param {string} filename 文件名，包含后缀
	 * @param {object} header 自定义表头
	 * @param {string} sheetName 这个 sheet 的名称
	 * @param {object} json2sheetOpts json 数据写入表格的配置
	 * @param {object} write2excelOpts 文件配置
	 * @return {*}
	 */
	const jsonToXlsx = ({
		data,
		filename = "default-filename.xlsx",
		header,
		sheetName = "sheet",
		json2sheetOpts = {},
		write2excelOpts = { bookType: "xlsx" },
	}) => {
		const newData = [...data]
		// 如果传入了表头，添加表头
		if (header) {
			newData.unshift(header)
			json2sheetOpts.skipHeader = true
		}
		// 转换数据
		const worksheet = utils.json_to_sheet(newData, json2sheetOpts)
		// 写入数据配置
		const workbook = {
			SheetNames: [sheetName], // 表名
			Sheets: {
				// 数据
				[sheetName]: worksheet,
			},
		}
		// 写入文件
		writeFile(workbook, filename, write2excelOpts)
	}

	/**
	 * @description: json 数据导出多个 sheet
	 * @param {array} sheetList 每个 sheet 配置的数组
	 * @param {string} filename 文件名
	 * @param {object} write2excelOpts 文件配置
	 * @return {*}
	 */
	const jsonToMultipleSheetXlsx = ({
		sheetList,
		filename = "default-filename.xlsx",
		write2excelOpts = { bookType: "xlsx" },
	}) => {
		// 最终要写入文件的数据
		const workbook = {
			SheetNames: [
				// sheetName
			],
			Sheets: {
				// 数据
				// [sheetName]: worksheet
			},
		}

		// 循环添加 workbook
		sheetList.forEach((item, index) => {
			const newItem = [...item.data]
			const { header, json2sheetOpts = {}, sheetName = `sheet-${index}` } = item
			if (header) {
				newItem.unshift(item.header)
				json2sheetOpts.skipHeader = true
			}

			const worksheet = utils.json_to_sheet(newItem, json2sheetOpts)

			workbook.SheetNames.push(sheetName)
			workbook.Sheets[sheetName] = worksheet
		})

		writeFile(workbook, filename, write2excelOpts)
	}

	/**
	 * @description: array 数据导出单个 sheet
	 * @param {array} data 要写入的数据
	 * @param {string} filename 文件名
	 * @param {object} header 自定义表头
	 * @param {string} sheetName 这个 sheet 的名称
	 * @param {object} write2excelOpts 文件配置
	 * @return {*}
	 */
	const arrayToXlsx = ({
		data,
		filename = "default-filename.xlsx",
		header,
		sheetName = "sheet",
		write2excelOpts = { bookType: "xlsx" },
	}) => {
		const newData = [...data]
		if (header) {
			newData.unshift(header)
		}

		const worksheet = utils.aoa_to_sheet(newData)
		const workbook = {
			SheetNames: [sheetName],
			Sheets: {
				[sheetName]: worksheet,
			},
		}

		writeFile(workbook, filename, write2excelOpts)
	}

	/**
	 * @description: array 数据导出多个 sheet
	 * @param {array} sheetList 每个 sheet 配置的数组
	 * @param {string} filename 文件名
	 * @param {object} write2excelOpts 文件配置
	 * @return {*}
	 */
	const arrayToMultipleSheetXlsx = ({
		sheetList,
		filename = "default-filename.xlsx",
		write2excelOpts = { bookType: "xlsx" },
	}) => {
		const workbook = {
			SheetNames: [],
			Sheets: {},
		}

		sheetList.forEach((item, index) => {
			const { data, header, sheetName = `sheet-${index + 1}` } = item
			const newData = [...data]
			if (header) {
				newData.unshift(header)
			}
			const worksheet = utils.aoa_to_sheet(newData)

			workbook.SheetNames.push(sheetName)
			workbook.Sheets[sheetName] = worksheet
		})
		writeFile(workbook, filename, write2excelOpts)
	}

	return { jsonToXlsx, jsonToMultipleSheetXlsx, arrayToXlsx, arrayToMultipleSheetXlsx }
}

export default useExportToXlsx
