/*
 * @Author: 二师弟
 * @Date: 2023-06-30 18:01:14
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 19:41:51
 * @Description: 最新状态组件
 */
import React, { useEffect, useState } from "react"
import Card from "../../../../../../components/Charts/Card"
import List from "./../../../../../../components/List/List"
import { Typography } from "antd"
import headimg1 from "../../../../../../assets/imgs/headimg1.png"
import headimg2 from "../../../../../../assets/imgs/headimg2.png"
import headimg3 from "../../../../../../assets/imgs/headimg3.png"
import headimg4 from "../../../../../../assets/imgs/headimg4.png"
import headimg5 from "../../../../../../assets/imgs/headimg5.png"
import headimg6 from "../../../../../../assets/imgs/headimg6.png"

const { Link } = Typography

const DATA = [
	{
		headimg: headimg1,
		html: (
			<p>
				威廉在 <Link>开源组</Link> 创建了项目 <Link>Vue</Link>
			</p>
		),
		date: "刚刚",
	},
	{
		headimg: headimg2,
		html: (
			<p>
				艾文
				<span>
					关注了 <Link>威廉</Link>
				</span>
			</p>
		),
		date: "1个小时前",
	},
	{
		headimg: headimg3,
		html: (
			<p>
				克里斯
				<span>
					发布了 <Link>个人动态</Link>
				</span>
			</p>
		),
		date: "1天前",
	},
	{
		headimg: headimg4,
		html: (
			<p>
				Vben
				<span>
					发表文章 <Link>如何编写一个Vite插件</Link>
				</span>
			</p>
		),
		date: "2天前",
	},
	{
		headimg: headimg5,
		html: (
			<p>
				皮特
				<span>
					回复了 <Link>杰克</Link> 的问题 <Link>如何进行项目优化？</Link>
				</span>
			</p>
		),
		date: "3天前",
	},
	{
		headimg: headimg6,
		html: (
			<p>
				杰克
				<span>
					关闭了问题 <Link>如何运行项目</Link>
				</span>
			</p>
		),
		date: "一周前",
	},
	{
		headimg: headimg1,
		html: (
			<p>
				威廉
				<span>
					发布了 <Link>个人动态</Link>
				</span>
			</p>
		),
		date: "一周前",
	},
	{
		headimg: headimg1,
		html: (
			<p>
				威廉
				<span>
					推送了代码到 <Link>Github</Link>
				</span>
			</p>
		),
		date: "2021-04-01 20:00",
	},
]

const Dynamic = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(true)
		}, 2000)
	}, [])

	return (
		<div>
			<Card
				title="最新动态"
				link="https://ant-design.antgroup.com/"
				linkText="更多"
				success={isSuccess}
				skeleton={true}
			>
				<List items={DATA} />
			</Card>
		</div>
	)
}

export default Dynamic
