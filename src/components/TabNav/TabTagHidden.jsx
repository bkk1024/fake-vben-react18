/*
 * @Author: 二师弟
 * @Date: 2023-06-20 22:34:17
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-02 17:47:53
 * @Description: 被隐藏的 TabNavTag 显示在这
 */
import React, { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const TabTagHidden = (props) => {
	const { tagListRef, tagsInfo } = props
	const nav = useNavigate()
	const location = useLocation()
	const [hiddenTags, setHiddenTags] = useState([])

	/**
	 * @description: 添加隐藏的标签
	 * @param {*} tag: {path, title}
	 * @return {*}
	 */
	const add = useCallback((tag) => {
		setHiddenTags((prevState) => {
			for (let i = 0; i < prevState.length; i++) {
				if (prevState[i].path === tag.path) {
					return prevState
				}
			}
			return [...prevState, tag]
		})
	}, [])

	/**
	 * @description: 判断当前这个 className 是否含有 tag-active
	 * @param {string} className
	 * @return {boolean}
	 */
	const isActive = (className) => {
		if (className.includes("tag-active")) return true
		return false
	}

	/**
	 * @description: 判断当前这个元素是否超出父元素范围，被隐藏了
	 * @param {number} distance1
	 * @param {number} distance2
	 * @return {boolean}
	 */
	const isHidden = (distance1, distance2) => {
		if (distance1 < distance2) return true
		return false
	}

	/**
	 * @description: 元素X轴滚动
	 * @param {HTMLElement} element
	 * @param {number} width
	 * @return {*}
	 */
	const scrollX = (element, width) => {
		element.scrollTo({
			top: 0,
			left: width,
			behavior: "smooth",
		})
	}

	/**
	 * @description: 让被隐藏的 active 元素滚动
	 * @param {HTMLElement} parent list 的宽度小于它的父级元素
	 * @return {number}
	 */
	const activeElScroll = useCallback((parent) => {
		const { scrollLeft, offsetLeft: listOffsetLeft, offsetWidth: listOffsetWidth, children } = parent
		const { children: list } = children[0]
		for (let i = 0; i < list.length; i++) {
			const { offsetLeft: itemOffsetLeft, offsetWidth: itemOffsetWidth, className } = list[i]
			if (!isActive(className)) continue
			let sw = 0
			if (isHidden(listOffsetLeft + listOffsetWidth, itemOffsetLeft + itemOffsetWidth - scrollLeft)) {
				// 右侧超出
				sw = scrollLeft + itemOffsetLeft + itemOffsetWidth - listOffsetWidth
				scrollX(parent, sw)
			} else if (isHidden(itemOffsetLeft, scrollLeft)) {
				// 左侧超出
				sw = itemOffsetLeft - listOffsetLeft
				scrollX(parent, sw)
			}
			return sw
		}
	}, [])

	/**
	 * @description: 更改 hiddenTags，包括添加或者删除内容
	 * @param {HTMLElement} parent list 的宽度小于它的父级元素
	 * @param {number} sw 滚动的距离
	 * @return {boolean}
	 */
	const changeHiddenTags = useCallback(
		(parent, sw) => {
			const { offsetLeft: listOffsetLeft, offsetWidth: listOffsetWidth, children } = parent
			const { children: list } = children[0]
			setHiddenTags([])
			for (let i = 0; i < list.length; i++) {
				const { offsetLeft: itemOffsetLeft, offsetWidth: itemOffsetWidth, dataset } = list[i]
				if (
					isHidden(listOffsetLeft + listOffsetWidth + 1, itemOffsetLeft + itemOffsetWidth / 2 - sw) ||
					isHidden(itemOffsetLeft + itemOffsetWidth / 2, sw)
				) {
					// 超出
					const tag = { path: dataset.path, title: dataset.title }
					add(tag)
				}
			}
		},
		[add]
	)

	useEffect(() => {
		const { offsetWidth } = tagListRef.current

		if (!offsetWidth) return
		// active 元素被掩盖后 scroll
		const ateElScroll = activeElScroll(tagListRef.current)
		// 将滚动后被隐藏的元素给到 hiddenTags
		changeHiddenTags(tagListRef.current, ateElScroll)
	}, [location, tagListRef, tagsInfo, activeElScroll, changeHiddenTags])

	return (
		<div
			className={`absolute z-[999] top-10 right-3 bg-white shadow-lg overflow-hidden origin-top linear duration-300 ${
				props.isShow ? "opacity-100 scale-100" : "opacity-0 scale-y-0"
			}`}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			{hiddenTags.map((item) => (
				<div
					key={item.path}
					className="px-4 h-8 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
					onClick={() => nav(item.path)}
				>
					{item.title}
				</div>
			))}
		</div>
	)
}

export default TabTagHidden
