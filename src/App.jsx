/*
 * @Author: 二师弟
 * @Date: 2023-06-16 18:27:24
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 20:16:02
 * @Description: 描述
 */
import "./App.css"
import routerList from "./Router"
import { useRoutes } from "react-router-dom"
import React, { useState } from "react"
import Backdrop from "./components/Backdrop/Backdrop"
import Loading from "./components/Loading/Loading"
import { setIsLogged } from "./store/user/userSlice"
import Expired from "./components/Expired"

function App() {
	const routes = useRoutes(routerList)
	const [isLoading, setIsLoading] = useState(true)

	window.onload = () => {
		setIsLoading(false)
		const user = localStorage.getItem("user")
		if (user) {
			const timeExpired = user.expired - user.save
			const nowExpired =
				new Date().getTime() - user.save
			if (nowExpired > timeExpired) {
				setIsLogged({
					isLogged: false,
				})
				localStorage.removeItem("token")
				localStorage.removeItem("user")
			}
		}
	}

	return (
		<div className="App">
			{isLoading && (
				<Backdrop
					style={{ backgroundColor: "white" }}
				>
					<Loading />
				</Backdrop>
			)}
			{!isLoading && <Expired>{routes}</Expired>}
		</div>
	)
}

export default App
