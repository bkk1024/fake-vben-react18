/*
 * @Author: 二师弟
 * @Date: 2023-07-02 17:56:47
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 14:18:03
 * @Description: 图标功能页面
 */
import React from "react"
import AntdIcon from "./components/AntdIcon"
import FaIcon from "./components/FaIcon"
import UseSvgIcon from "./components/UseSvgIcon"
import PageContainer from "../../../components/PageContainer"

const Icon = () => {
	return (
		<PageContainer label="Icon 图标">
			<AntdIcon />
			<FaIcon />
			<UseSvgIcon />
		</PageContainer>
	)
}

export default Icon
