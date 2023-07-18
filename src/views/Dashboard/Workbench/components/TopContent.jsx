/*
 * @Author: 二师弟
 * @Date: 2023-06-29 19:35:57
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-30 21:55:15
 * @Description: Workbench 顶部内容
 */
import React from "react"
import headimg from "../../../../assets/imgs/headimg.jpg"

const TopContent = () => {
	return (
		<div className="h-[100px] border-t bg-white flex items-center justify-between">
			{/* 头像、其他信息 */}
			<div className="p-2 pl-6 flex items-center">
				<div className="w-[72px] h-[72px] rounded-[50%] mr-4 overflow-hidden">
					<img className="w-full h-full object-cover" src={headimg} alt="" />
				</div>
				<div>
					<h1 className="text-[16px] font-[500]">早安, Vben Admin, 开始您一天的工作吧！</h1>
					<span className="text-[12px] text-gray-400">今日晴，20℃ - 32℃！</span>
				</div>
			</div>
			{/* 工作相关 */}
			<div className="flex flex-row-reverse items-center">
				<div className="flex items-center justify-around">
					<div className="justify-center mr-14">
						<h6 className="text-[14px] text-right text-gray-500">代办</h6>
						<span className="text-[24px]">2/10</span>
					</div>
					<div className="justify-center mr-14">
						<h6 className="text-[14px] text-right text-gray-500">项目</h6>
						<span className="text-[24px]">8</span>
					</div>
					<div className="justify-center mr-14">
						<h6 className="text-[14px] text-right text-gray-500">团队</h6>
						<span className="text-[24px]">300</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopContent
