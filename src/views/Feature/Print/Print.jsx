/*
 * @Author: 二师弟
 * @Date: 2023-07-03 14:08:53
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 14:28:50
 * @Description: 打印功能
 */
import React from "react"
import printJS from "print-js"
import headimg1 from "../../../assets/imgs/headimg1.png"
import headimg2 from "../../../assets/imgs/headimg2.png"
import PageContainer from "../../../components/PageContainer"
import AButton from "../../../components/AButton"

const JSONDATA = {
	printable: [
		{ name: "ll", email: "123@gmail.com", phone: "123" },
		{ name: "qq", email: "456@gmail.com", phone: "456" },
	],
	properties: ["name", "email", "phone"],
	type: "json",
}

const JSONDATA_IMAGE = {
	printable: [headimg1, headimg2],
	type: "image",
	header: "Multiple Images",
	imageStyle: "width:100%;",
}

const Print = () => {
	/**
	 * @description: 打印json数据为表格
	 * @return {*}
	 */
	const jsonPrint = () => {
		printJS(JSONDATA)
	}

	/**
	 * @description: 打印图片
	 * @return {*}
	 */
	const imagePrint = () => {
		printJS(JSONDATA_IMAGE)
	}

	return (
		<PageContainer label="打印示例" desc="使用 print-js 库">
			<AButton type="primary" className="mr-4" onClick={jsonPrint}>
				json打印表格
			</AButton>
			<AButton type="primary" onClick={imagePrint}>
				图片打印
			</AButton>
		</PageContainer>
	)
}

export default Print
