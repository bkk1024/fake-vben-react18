/*
 * @Author: 二师弟
 * @Date: 2023-06-20 18:31:39
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-02 12:52:13
 * @Description: 标签页路由
 */
import React, { useCallback, useEffect, useRef, useState } from "react"
import TabNavTag from "./TabNavTag"
import { useLocation } from "react-router-dom"
import useRouterMap from "../../hooks/RouterMap"
import routerList from "../../Router"
import { DashOutlined } from "@ant-design/icons"
import TabTagHidden from "./TabTagHidden"
import useMoveEvent from "../../hooks/MoveEvent"
import classes from "./TabNav.module.css"

const TabNav = () => {
	const routerMapFn = useRouterMap()
	const routerMap = routerMapFn(routerList)
	const location = useLocation()

	/**
	 * @description: 返回每个标签信息
	 * @return {*}
	 */
	const reTagInfo = useCallback(() => {
		if (location.pathname === "/") return []
		const pathEndWith = "/" + location.pathname.split("/").pop()
		return [
			{
				path: location.pathname,
				title: routerMap[pathEndWith],
				key: location.pathname.split("/").join(""),
			},
		]
	}, [location.pathname, routerMap])

	// 标签信息
	const [tagsInfo, setTagsInfo] = useState(JSON.parse(sessionStorage.getItem("tagsInfo")) || [])

	/**
	 * @description: 添加标签
	 * @param {*} key
	 * @return {*}
	 */
	const addTag = useCallback(
		(key) => {
			setTagsInfo((prevState) => {
				for (let i = 0; i < prevState.length; i++) {
					if (prevState[i].key === key) {
						return prevState
					}
				}
				const newState = [...prevState, ...reTagInfo()]
				sessionStorage.setItem("tagsInfo", JSON.stringify(newState))
				return newState
			})
		},
		[reTagInfo]
	)

	/**
	 * @description: 删除标签
	 * @param {*} index
	 * @return {*}
	 */
	const delTag = (index) => {
		// console.log(index)
		setTagsInfo((prevState) => {
			const newState = [...prevState]
			newState.splice(index, 1)
			sessionStorage.setItem("tagsInfo", JSON.stringify(newState))
			return newState
		})
	}

	const tagListRef = useRef(null)

	useEffect(() => {
		const key = location.pathname.split("/").join("")
		addTag(key)
	}, [location, tagListRef, addTag])

	const [isHover, setIsHover] = useState(false)
	const moveEventHandler = useMoveEvent()

	return (
		<div className="relative w-full h-8 border-t border-solid border-gray-100 flex items-center justify-between bg-white ">
			<div ref={tagListRef} className={`${classes.TagsListBox} h-full ml-2 overflow-auto`}>
				<div className="tags-list h-full flex items-center flex-nowrap">
					{tagsInfo.map((item, index) => (
						<TabNavTag
							key={item.key}
							index={index}
							path={item.path}
							title={item.title}
							tagsInfo={tagsInfo}
							onDel={delTag}
							canDel={tagsInfo.length > 1 ? true : false}
							tagListRef={tagListRef}
						>
							{item.title}
						</TabNavTag>
					))}
				</div>
			</div>
			<span
				className="show-hidden-tags w-12 h-full flex-none flex items-center justify-center cursor-pointer bg-white shadow-[-4px_0px_5px_-5px]"
				onMouseEnter={() => moveEventHandler.Enter(() => setIsHover(true), 400)}
				onMouseLeave={() => moveEventHandler.Leave(() => setIsHover(false))}
			>
				<DashOutlined />
			</span>
			<TabTagHidden
				isShow={isHover}
				tagListRef={tagListRef}
				tagsInfo={tagsInfo}
				onMouseEnter={() => moveEventHandler.Enter(() => setIsHover(true))}
				onMouseLeave={() => moveEventHandler.Leave(() => setIsHover(false))}
			/>
		</div>
	)
}

export default TabNav
