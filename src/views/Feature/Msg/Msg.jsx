/*
 * @Author: 二师弟
 * @Date: 2023-07-04 17:51:58
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-04 19:26:17
 * @Description: 消息提示
 */
import React from "react"
import PageContainer from "../../../components/PageContainer"
import Message from "./components/Message"
import Confirm from "./components/Confirm"
import MyModal from "./components/MyModal"
import Notification from "./components/Notification"

const Msg = () => {
	return (
		<PageContainer label="消息示例">
			<Message />
			<br />
			<Confirm />
			<br />
			<MyModal />
			<br />
			<Notification />
		</PageContainer>
	)
}

export default Msg
