import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	root: {
		"& .MuiTextField-root": {
			margin: "8px",
		},
	},
	paper: {
		padding: "8px",
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "97%",
		margin: "10px 0",
	},
	buttonSubmit: {
		marginBottom: 10,
		width: "320px!important",
	},
	buttonClear: {
		marginTop: 10,
		padding: "10px!important",
	},
}));
