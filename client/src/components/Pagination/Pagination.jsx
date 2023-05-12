import { Pagination, PaginationItem } from "@mui/material";
import useStayles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../actions/posts";
const Paginate = ({ page }) => {
	const { numberOfPages } = useSelector((state) => state.posts);
	const classes = useStayles();
	const dispatch = useDispatch();
	useEffect(() => {
		if (page) {
			dispatch(getPosts(page));
		}
	}, [page]);
	return (
		<Pagination
			classes={{ ul: classes.ul }}
			count={numberOfPages}
			page={Number(page)}
			variant="outlined"
			color="primary"
			renderItem={(item) => (
				<PaginationItem
					{...item}
					component={Link}
					to={`/posts?page=${item.page}`}
				/>
			)}
		/>
	);
};

export default Paginate;
