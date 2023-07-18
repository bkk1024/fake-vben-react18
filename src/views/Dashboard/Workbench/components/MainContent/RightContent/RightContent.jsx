/*
 * @Author: 二师弟
 * @Date: 2023-06-29 20:02:27
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 19:56:16
 * @Description: Workbench 主体右侧内容
 */
import React from "react"
import Entry from "./../../../../../../components/Entry"
import QuickNav from "./QuickNav"
import DecorateLottie from "./DecorateLottie"
import SalesStatistics from "./SalesStatistics"

const RightContent = () => {
	return (
		<div className="flex-1">
			<Entry delay={0.1}>
				<QuickNav />
			</Entry>
			<Entry delay={0.2}>
				<DecorateLottie />
			</Entry>
			<Entry delay={0.3}>
				<SalesStatistics />
			</Entry>
		</div>
	)
}

export default RightContent
