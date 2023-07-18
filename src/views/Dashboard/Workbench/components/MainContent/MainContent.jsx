/*
 * @Author: 二师弟
 * @Date: 2023-06-29 20:01:45
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 16:21:06
 * @Description: Workbench 主体内容
 */
import React from "react"
import LeftContent from "./LeftContent/LeftContent"
import RightContent from "./RightContent/RightContent"

const MainContent = () => {
	return (
		<div className="flex p-4">
			<LeftContent />
			<RightContent />
		</div>
	)
}

export default MainContent
