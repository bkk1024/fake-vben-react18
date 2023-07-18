/*
 * @Author: 二师弟
 * @Date: 2023-07-02 17:57:48
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 18:43:26
 * @Description: 功能路由
 */
import { BranchesOutlined } from "@ant-design/icons"
import Excel from "./Excel"
import Icon from "../../views/Feature/Icon/Icon"
import Print from "../../views/Feature/Print/Print"
import RightClick from "../../views/Feature/RightClick/RightClick"
import ClickOutSide from "../../views/Feature/ClickOutSide/COS"
import ImagePreview from "../../views/Feature/ImagePreview/ImagePreview"
import TextCopy from "../../views/Feature/TextCopy/TextCopy"
import Msg from "../../views/Feature/Msg/Msg"
import WaterMark from "../../views/Feature/WaterMark/WaterMark"
import Ripple from "../../views/Feature/Ripple/Ripple"
import FullScreen from "../../views/Feature/FullScreen/FullScreen"

const Feature = {
	path: "/feature",
	pathname: "Featrue",
	key: "/feature",
	title: "功能",
	icon: BranchesOutlined,
	children: [
		{
			path: "icon",
			pathname: "Icon",
			key: "/icon",
			title: "图标",
			element: <Icon />,
		},
		{
			path: "print",
			pathname: "Print",
			key: "/print",
			title: "打印",
			element: <Print />,
		},
		{
			path: "rightclick",
			pathname: "RightClick",
			key: "/rightclick",
			title: "右键菜单",
			element: <RightClick />,
		},
		{
			path: "click-outside",
			pathname: "ClickOutSide",
			key: "/click-outside",
			title: "ClickOutSide组件",
			element: <ClickOutSide />,
		},
		{
			path: "image-preview",
			pathname: "ImagePreview",
			key: "/image-preview",
			title: "图片预览",
			element: <ImagePreview />,
		},
		{
			path: "text-copy",
			pathname: "TextCopy",
			key: "/text-copy",
			title: "剪切板",
			element: <TextCopy />,
		},
		{
			path: "msg",
			pathname: "Msg",
			key: "/msg",
			title: "消息提示",
			element: <Msg />,
		},
		{
			path: "water-mark",
			pathname: "WaterMark",
			key: "/water-mark",
			title: "水印",
			element: <WaterMark />,
		},
		{
			path: "ripple",
			pathname: "Ripple",
			key: "/ripple",
			title: "水波纹",
			element: <Ripple />,
		},
		{
			path: "full-screen",
			pathname: "FullScreen",
			key: "/full-screen",
			title: "全屏",
			element: <FullScreen />,
		},
		Excel,
	],
}

export default Feature
