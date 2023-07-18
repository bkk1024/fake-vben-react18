/*
 * @Author: 二师弟
 * @Date: 2023-07-04 16:25:48
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 16:30:57
 * @Description: 图片预览
 */
import React from "react"
import PageContainer from "../../../components/PageContainer"
import { Image } from "antd"
import headimg1 from "../../../assets/imgs/headimg1.png"
import headimg2 from "../../../assets/imgs/headimg2.png"
import headimg3 from "../../../assets/imgs/headimg3.png"

const ImagePreview = () => {
	return (
		<PageContainer label="图片预览示例">
			<Image.PreviewGroup>
				<Image width={200} src={headimg1} />
				<Image width={200} src={headimg2} />
				<Image width={200} src={headimg3} />
			</Image.PreviewGroup>
		</PageContainer>
	)
}

export default ImagePreview
