/*
 * @Author: 二师弟
 * @Date: 2023-06-29 15:40:11
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:40:44
 * @Description: Analysis 顶部内容
 */
import React, { useEffect, useState } from "react"
import SvgIcon from "../../../../components/SvgIcon"
import Card from "../../../../components/Charts/Card"

const TopContent = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	return (
		<div className="top md:flex enter-y">
			<div className="md:w-1/4 w-full md:mr-4 md:mb-4">
				<Card color="#5bb037" title="访问数" tag="月" success={isSuccess} skeleton={true}>
					<div className="flex flex-col justify-around h-36">
						<div className="flex justify-between items-center px-4">
							<div className="text-[25px]">$2000</div>
							<div>
								<SvgIcon name="interview" className="w-12 h-12" />
							</div>
						</div>
						<div className="flex justify-between px-4">
							总访问数 <span>$120,000</span>
						</div>
					</div>
				</Card>
			</div>
			<div className="md:w-1/4 w-full md:mr-4 md:mb-4">
				<Card color="#5bb037" title="访问数" tag="月" success={isSuccess} skeleton={true}>
					<div className="flex flex-col justify-around h-36">
						<div className="flex justify-between items-center px-4">
							<div className="text-[25px]">$2000</div>
							<div>
								<SvgIcon name="interview" className="w-12 h-12" />
							</div>
						</div>
						<div className="flex justify-between px-4">
							总访问数 <span>$120,000</span>
						</div>
					</div>
				</Card>
			</div>
			<div className="md:w-1/4 w-full md:mr-4 md:mb-4">
				<Card color="#5bb037" title="访问数" tag="月" success={isSuccess} skeleton={true}>
					<div className="flex flex-col justify-around h-36">
						<div className="flex justify-between items-center px-4">
							<div className="text-[25px]">$2000</div>
							<div>
								<SvgIcon name="interview" className="w-12 h-12" />
							</div>
						</div>
						<div className="flex justify-between px-4">
							总访问数 <span>$120,000</span>
						</div>
					</div>
				</Card>
			</div>
			<div className="md:w-1/4 w-full">
				<Card color="#5bb037" title="访问数" tag="月" success={isSuccess} skeleton={true}>
					<div className="flex flex-col justify-around h-36">
						<div className="flex justify-between items-center px-4">
							<div className="text-[25px]">$2000</div>
							<div>
								<SvgIcon name="interview" className="w-12 h-12" />
							</div>
						</div>
						<div className="flex justify-between px-4">
							总访问数 <span>$120,000</span>
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default TopContent
