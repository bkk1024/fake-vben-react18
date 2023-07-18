/*
 * @Author: 二师弟
 * @Date: 2023-06-29 20:02:18
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 18:02:14
 * @Description: Workbench 主体左侧内容
 */
import React from "react"
import Project from "./Project"
import Entry from "../../../../../../components/Entry"
import Dynamic from "./Dynamic"

const LeftContent = () => {
	return (
		<div className="flex-[2_2_0%] mr-4">
			<Entry delay={0.2}>
				<Project />
			</Entry>
			<Entry>
				<Dynamic />
			</Entry>
		</div>
	)
}

export default LeftContent
