/*
 * @Author: 二师弟
 * @Date: 2023-06-18 13:56:04
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-20 16:12:23
 * @Description: 描述
 */
import React from "react"
import { useSelector } from "react-redux"
// import { useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"

const Home = () => {
	const userState = useSelector(
		(state) => state.user
	)
	// const [isLogged, setIsLogged] = useState(
	// 	userState.isLogged
	// )

	// const location = useLocation()

	return (
		<>
			{userState.isLogged ? (
				<Navigate
					to={"/dashboard/analysis"}
					replace
				/>
			) : (
				<Navigate to="/login" replace />
			)}
		</>
	)
}

export default Home
