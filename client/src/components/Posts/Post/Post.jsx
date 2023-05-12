import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	ButtonBase,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";
import { Fragment } from "react";

function Post({ post, setCurrentId }) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("profile"));
	const Likes = () => {
		if (post.likeCount.length > 0) {
			return post.likeCount.find(
				(like) => like === (user?.result?.googleId || user?.result?._id)
			) ? (
				<Fragment>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp;
					{post.likeCount.length > 2
						? `You and ${post.likeCount.length - 1} others`
						: `${post.likeCount.length} like${
								post.likeCount.length > 1 ? "s" : ""
						}`}
				</Fragment>
			) : (
				<Fragment>
					<ThumbUpAltOutlinedIcon fontSize="small" />
					&nbsp;{post.likeCount.length}{" "}
					{post.likeCount.length === 1 ? "Like" : "Likes"}
				</Fragment>
			);
		}

		return (
			<Fragment>
				<ThumbUpAltOutlinedIcon fontSize="small" />
				&nbsp;Like
			</Fragment>
		);
	};
	const openPost = () => {
		navigate(`/posts/${post._id}`);
	};
	return (
		<Card className={classes.card} raised elevation={6}>
			<ButtonBase className={classes.cardAction} onClick={openPost}>
				<CardMedia
					className={classes.media}
					image={
						post.selectedFile ||
						"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
					}
					title={post.title}
				/>
				<div className={classes.overlay}>
					<Typography variant="h6">{post.name}</Typography>
					<Typography variant="body2">
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>
				{(user?.result?.googleId === post?.creator ||
					user?.result._id === post?.creator) && (
					<div className={classes.overlay2} name="edit">
						<Button
							onClick={(e) => {
								e.stopPropagation();
								setCurrentId(post._id);
							}}
							style={{ color: "white" }}
							size="small"
						>
							<MoreHorizIcon fontSize="default" />
						</Button>
					</div>
				)}
				<div className={classes.details}>
					<Typography variant="body2" color="textSecondary" component="h2">
						{post.tags.map((tag) => `#${tag} `)}
					</Typography>
				</div>
				<Typography
					className={classes.title}
					gutterBottom
					variant="h5"
					component="h2"
				>
					{post.title}
				</Typography>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{post.message}
					</Typography>
				</CardContent>
			</ButtonBase>
			<CardActions className={classes.cardActions}>
				<Button
					size="small"
					color="primary"
					disabled={!user?.result}
					onClick={() => dispatch(likePost(post._id))}
				>
					<Likes />
				</Button>
				{(user?.result?.googleId === post?.creator ||
					user?.result._id === post?.creator) && (
					<Button
						size="small"
						color="error"
						onClick={() => dispatch(deletePost(post._id))}
					>
						<DeleteIcon fontSize="small" /> Delete
					</Button>
				)}
			</CardActions>
		</Card>
	);
}

export default Post;
