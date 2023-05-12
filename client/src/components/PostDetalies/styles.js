import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const theme = createTheme();
export default makeStyles(() => ({
	media: {
		// border: "1px solid red",
		borderRadius: "10px!important",
		objectFit: "cover!important",
		width: "100%!important",
		maxHeight: "600px!important",
		height: "60%!important",
	},
	card: {
		display: "flex!important",
		width: "100%!important",
		justifyContent: "space-around",

		[theme.breakpoints.down("sm")]: {
			flexWrap: "nowrap!important",
			flexDirection: "column!important",
		},
	},
	section: {
		borderRadius: "20px!important",
		margin: "10px!important",
		width: "60%!important",
	},
	imageSection: {
		// border: "1px solid black",
		marginLeft: "20px!important",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "0!important",
		},
		width: "40%!important",
	},
	recommendedPosts: {
		display: "flex!important",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column!important",
		},
	},
	loadingPaper: {
		display: "block!important",
		display: "flex!important",
		justifyContent: "center!important",
		alignItems: "center!important",
		padding: "20px!important",
		borderRadius: "15px!important",
		height: "39vh!important",
	},
	commentsOuterContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	commentsInnerContainer: {
		height: "200px",
		overflowY: "auto",
		marginRight: "30px",
	},
}));
