import BasicForm from "../../../views/Page/Form/Basic/BasicForm"
import HighForm from "../../../views/Page/Form/High/HighForm"
import StepForm from "../../../views/Page/Form/Step/StepForm"

const Form = {
	path: "form",
	pathname: "Form",
	key: "/form",
	title: "表单",
	children: [
		{
			path: "basic-form",
			pathname: "BasicForm",
			key: "/basic-form",
			title: "基础表单",
			element: <BasicForm />,
		},
		{
			path: "steps-form",
			pathname: "StepsForm",
			key: "/steps-form",
			title: "分步表单",
			element: <StepForm />,
		},
		{
			path: "high-form",
			pathname: "HighForm",
			key: "/high-form",
			title: "高级表单",
			element: <HighForm />,
		},
	],
}

export default Form
