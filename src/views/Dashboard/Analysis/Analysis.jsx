/*
 * @Author: 二师弟
 * @Date: 2023-06-17 00:00:45
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:46:07
 * @Description: 分析页
 */
import React from "react"
import TopContent from "./components/TopContent"
import CenterContent from "./components/CenterContent"
import BottomContent from "./components/BottomContent"
import Entry from "./../../../components/Entry"

const Analysis = () => {
	return (
		<div className="m-4">
			<Entry>
				<TopContent />
			</Entry>
			<Entry delay={0.1}>
				<CenterContent />
			</Entry>
			<Entry delay={0.2}>
				<BottomContent />
			</Entry>
		</div>
	)
}

export default Analysis
