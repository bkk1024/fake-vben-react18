/*
 * @Author: 二师弟
 * @Date: 2023-07-04 18:59:19
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-05 21:12:23
 * @Description: 描述
 */
import { Modal } from "antd"
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons"

const { confirm } = Modal

const useConfirm = () => {
	const defaultConfig = {
		cancelText: "取消",
		cancelButtonProps: {},
		okText: "确认",
		okButtonProps: {
			className: "bg-[#0960bd]",
		},
	}

	const reConfig = (config1, config2) => {
		const config = {
			...config1,
			...config2,
			okButtonProps: {
				...config1?.okButtonProps,
				...config2?.okButtonProps,
				classNames: config1?.okButtonProps?.classNames + " " + config2?.okButtonProps?.classNames,
				style: {
					...config1?.okButtonProps?.style,
					...config2?.okButtonProps?.style,
				},
			},
		}
		return config
	}

	const info = (config) => {
		return confirm({
			icon: (
				<InfoCircleFilled
					style={{
						color: "#0960bd",
					}}
				/>
			),
			...reConfig(defaultConfig, config),
		})
	}

	const success = (config) => {
		return confirm({
			icon: (
				<CheckCircleFilled
					style={{
						color: "#55d187",
					}}
				/>
			),
			...reConfig(defaultConfig, config),
		})
	}

	const warning = (config) => {
		return confirm({
			icon: (
				<InfoCircleFilled
					style={{
						color: "#efbd47",
					}}
				/>
			),
			...reConfig(defaultConfig, config),
		})
	}

	const error = (config) => {
		return confirm({
			icon: (
				<CloseCircleFilled
					style={{
						color: "#ed6f6f",
					}}
				/>
			),
			...reConfig(defaultConfig, config),
		})
	}

	return { info, success, warning, error }
}

export default useConfirm
