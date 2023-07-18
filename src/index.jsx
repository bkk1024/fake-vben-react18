/*
 * @Author: 二师弟
 * @Date: 2023-06-16 18:27:24
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-07-06 21:36:43
 * @Description: 描述
 */
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./style.css"
import App from "./App"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/index"
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"

const root = ReactDOM.createRoot(document.getElementById("root"))

window.addEventListener("load", (e) => {})

root.render(
	<>
		{/* <React.StrictMode> */}
		<ConfigProvider locale={zhCN}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</ConfigProvider>
		{/* </React.StrictMode> */}
	</>
)
