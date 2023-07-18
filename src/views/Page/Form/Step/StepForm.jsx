/*
 * @Author: 二师弟
 * @Date: 2023-07-07 14:28:55
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 17:46:09
 * @Description: 分步表单
 */
import React, { useState } from "react"
import PageContainer from "../../../../components/PageContainer"
import { Steps } from "antd"
import { CheckCircleFilled } from "@ant-design/icons"
import Card from "../../../../components/Charts/Card"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

const StepForm = () => {
	const [current, setCurrent] = useState(1)

	const next = () => {
		setCurrent((prevState) => prevState + 1)
	}

	const prev = (steps = 1) => {
		setCurrent((prevState) => prevState - steps)
	}

	const stepsItems = [
		{
			title: "填写转账信息",
			content: <Step1 next={next} />,
		},
		{
			title: "确认转账信息",
			content: <Step2 next={next} prev={prev} />,
		},
		{
			title: "完成",
			content: <Step3 prev={prev} />,
			icon: current === 2 ? <CheckCircleFilled className="text-[30px] text-[]" /> : null,
		},
	]

	return (
		<PageContainer label="分步表单" desc="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成">
			<Card className="p-4">
				<Steps current={current} items={stepsItems} />
				<br />
				<div>{stepsItems[current].content}</div>
				{/* <div className="flex justify-center">
					{current < stepsItems.length - 1 && (
						<AButton
							className="mr-3"
							type="primary"
							onClick={() => setCurrent((prevState) => prevState + 1)}
						>
							下一步
						</AButton>
					)}
					{current > 0 && (
						<AButton onClick={() => setCurrent((prevState) => prevState - 1)}>上一步</AButton>
					)}
				</div> */}
			</Card>
		</PageContainer>
	)
}

export default StepForm
