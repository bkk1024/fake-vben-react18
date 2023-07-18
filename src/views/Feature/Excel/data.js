/*
 * @Author: 二师弟
 * @Date: 2023-07-05 15:39:36
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 13:46:23
 * @Description: Excel 导出的数据
 */
export const columns = [
	{
		title: "ID",
		dataIndex: "id",
		width: 80,
	},
	{
		title: "姓名",
		dataIndex: "name",
		width: 120,
	},
	{
		title: "年龄",
		dataIndex: "age",
		width: 80,
	},
	{
		title: "编号",
		dataIndex: "no",
		width: 80,
	},
	{
		title: "地址",
		dataIndex: "address",
	},
	{
		title: "开始时间",
		dataIndex: "beginTime",
	},
	{
		title: "结束时间",
		dataIndex: "endTime",
	},
]

// json 格式数据
export const data = (() => {
	const arr = []
	for (let index = 0; index < 40; index++) {
		arr.push({
			id: `${index + 1}`,
			name: `${index + 1} John Brown`,
			age: `${index + 10}`,
			no: `${index}98678`,
			address: "New York No. 1 Lake ParkNew York No. 1 Lake Park",
			beginTime: new Date().toLocaleString(),
			endTime: new Date().toLocaleString(),
		})
	}
	return arr
})()

// ["ID", "姓名", "年龄", "编号", "地址", "开始时间", "结束时间"]
export const arrHeader = columns.map((column) => column.title)
// 数组数据，二维数组保存数据
// [["ID", "姓名", "年龄", "编号", "地址", "开始时间", "结束时间"],["0", "0 John Brown", "10", "098678"]]
export const arrData = data.map((item) => {
	return Object.keys(item).map((key) => item[key])
})
