import { Grid, CircularProgress, Paper } from "@mui/material";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

function Posts({ setCurrentId }) {
	const { posts, isLoading } = useSelector((state) => state.posts);
	const classes = useStyles();
	if (!posts?.length && !isLoading)
		return <h3 style={{ color: "#404040" }}>No posts</h3>;
	return isLoading ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems="stretch"
			spacing={3}
		>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={12} md={6} lg={6}>
					{/* lg={3} */}
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
}

export default Posts;
