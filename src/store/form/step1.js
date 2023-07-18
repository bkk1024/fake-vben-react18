import { createSlice } from "@reduxjs/toolkit"

const Step1Slice = createSlice({
	name: "formStep1",
	initialState: {
		pay: "test123@123.com",
		receive: "test456@123.com",
		receiveType: "支付宝",
		receiver: "二师弟",
		amount: 500,
	},
	reducers: {
		setStep1Info(state, action) {
			state.pay = action.payload.pay
			state.receive = action.payload.receive
			state.receiveType = action.payload.receiveType
			state.receiver = action.payload.receiver
			state.amount = action.payload.amount
		},
	},
})

export const { setStep1Info } = Step1Slice.actions
export const { reducer: Step1SliceReducer } = Step1Slice
