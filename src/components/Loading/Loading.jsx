/*
 * @Author: 二师弟
 * @Date: 2023-06-16 22:58:41
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-18 15:33:13
 * @Description: 描述
 */
import React from "react"
import Lottie from "lottie-react"
import LoadingAnimation from "../../assets/lottie/loading.json"

const Loading = () => {
	return (
		<Lottie
			className="w-36 h-36 "
			animationData={LoadingAnimation}
		/>
	)
}

export default Loading
