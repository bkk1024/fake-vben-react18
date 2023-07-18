/*
 * @Author: 二师弟
 * @Date: 2023-06-30 19:42:54
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:42:37
 * @Description: Workbench 右侧内容 装饰组件
 */
import React, { useEffect, useState } from "react"
import Lottie from "lottie-react"
import DecorationJSON from "../../../../../../assets/lottie/decoration.json"
import Card from "./../../../../../../components/Charts/Card"

const DecorateLottie = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	return (
		<div className="bg-white flex justify-center mb-4">
			<Card success={isSuccess} skeleton={true}>
				<div className="flex justify-center">
					<Lottie className="w-52 h-52" animationData={DecorationJSON} />
				</div>
			</Card>
		</div>
	)
}

export default DecorateLottie
