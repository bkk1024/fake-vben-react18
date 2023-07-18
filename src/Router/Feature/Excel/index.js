/*
 * @Author: 二师弟
 * @Date: 2023-07-05 15:27:40
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 14:22:53
 * @Description: Excel 路由
 */
import ArrayExport from "../../../views/Feature/Excel/ArrayExport/ArrayExport"
import ChooseExport from "../../../views/Feature/Excel/ChooseExport/ChooseExport"
import ImportExcel from "../../../views/Feature/Excel/ImportExcel/ImportExcel"
import JsonExport from "../../../views/Feature/Excel/JsonExport/JsonExport"

const Excel = {
	path: "excel",
	pathname: "Excel",
	key: "/excel",
	title: "Excel",
	children: [
		{
			path: "choose-export",
			pathname: "ChooseExport",
			key: "/choose-export",
			title: "选择导出格式",
			element: <ChooseExport />,
		},
		{
			path: "json-export",
			pathname: "JsonExport",
			key: "/json-export",
			title: "JSON数据导出",
			element: <JsonExport />,
		},
		{
			path: "array-export",
			pathname: "ArrayExport",
			key: "/array-export",
			title: "数组数据导出",
			element: <ArrayExport />,
		},
		{
			path: "import-excel",
			pathname: "ImportExcel",
			key: "/import-excel",
			title: "excel数据导入",
			element: <ImportExcel />,
		},
	],
}

export default Excel
