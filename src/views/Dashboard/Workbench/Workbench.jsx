/*
 * @Author: 二师弟
 * @Date: 2023-06-17 00:01:04
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 16:04:46
 * @Description: 工作台
 */

import React from "react"
import TopContent from "./components/TopContent"
import MainContent from "./components/MainContent/MainContent"
import Entry from "./../../../components/Entry"

const Workbench = () => {
	return (
		<div>
			<Entry direction="r">
				<TopContent />
			</Entry>
			<MainContent />
		</div>
	)
}

export default Workbench
