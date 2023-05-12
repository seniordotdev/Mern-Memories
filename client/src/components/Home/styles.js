import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const theme = createTheme();
export default makeStyles(() => ({
	appBarSearch: {
		borderRadius: 4,
		marginBottom: "1rem",
		display: "flex",
		padding: "16px",
	},
	pagination: {
		borderRadius: 4,
		marginTop: "1rem",
		padding: "16px",
	},
	gridContainer: {
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column-reverse",
		},
	},
}));
