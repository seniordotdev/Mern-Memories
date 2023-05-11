import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const theme = createTheme();
export default makeStyles(() => ({
	paper: {
		marginTop: theme.spacing(8),
		// marginTop: "64px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(2),
		// padding: "16px",
	},
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			// margin: "8px",
		},
	},
	avatar: {
		margin: theme.spacing(1),
		// margin: "8px",
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
		// marginTop: "24px",
	},
	submit: {
		// margin: theme.spacing(3, 0, 2),
		margin: "24px 0px 16px 15px!important",
	},
	googleButton: {
		// marginBottom: theme.spacing(2),
		// marginBottom: "16px",
		margin: "0px 0px 16px 15px!important",
	},
}));
