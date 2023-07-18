/*
 * @Author: 二师弟
 * @Date: 2023-07-07 17:29:45
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-07 17:45:28
 * @Description: 步骤三
 */
import React from "react"
import { Result } from "antd"
import AButton from "./../../../../components/AButton"
import TransferInfo from "./components/TransferInfo"
import { useSelector } from "react-redux"
import { Divider } from "antd"

const Step3 = (props) => {
	const step1 = useSelector((state) => state.formStep1)

	return (
		<div className="flex justify-center">
			<div className="w-[500px]">
				<Result status="success" title="操作成功" subTitle="预计两小时内到账" />
				<div className="flex justify-center">
					<AButton
						type="primary"
						className="mr-3"
						onClick={() => {
							props.prev(2)
						}}
					>
						再转一笔
					</AButton>
					<AButton>查看账单</AButton>
				</div>
				<Divider />
				<div className="bg-gray-100 p-4">
					<TransferInfo
						className="ml-4"
						pay={step1.pay}
						receive={step1.receive}
						receiveType={step1.receiveType}
						receiver={step1.receiver}
						amount={step1.amount}
					/>
				</div>
			</div>
		</div>
	)
}

export default Step3
