/*
 * @Author: 二师弟
 * @Date: 2023-06-16 18:34:07
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 20:01:25
 * @Description: 整体布局组件
 */
import { Layout } from "antd"
import React, { useRef } from "react"
// import classes from "./MyLayout.module.css"
import LayoutSider from "./LayoutSider/LayoutSider"
import LayoutHeader from "./LayoutHeader/LayoutHeader"
import BackTop from "./BackTop"

const { Content } = Layout

const MyLayout = (props) => {
	const layoutRef = useRef(null)

	return (
		<Layout>
			<LayoutSider />
			<Layout
				className="relative"
				style={{
					minWidth: "800px",
				}}
			>
				<LayoutHeader />
				<Content
					ref={layoutRef}
					style={{
						position: "relative",
						flex: "1 1 auto",
						// padding: "16px",
						minHeight: `calc(100vh - 80px)`,
						maxHeight: `calc(100vh - 80px)`,
						overflow: "auto",
					}}
				>
					<div className="overflow-auto">{props.children}</div>
					<BackTop layoutRef={layoutRef} />
				</Content>
			</Layout>
		</Layout>
	)
}
export default MyLayout
