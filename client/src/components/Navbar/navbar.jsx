import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStayles from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = ({ memoriesLogo, memoriesText }) => {
	const classes = useStayles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const [result, setResult] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const logout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
		setUser(null);
	};
	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				logout();
			}
		}
		setUser(localStorage.getItem("profile"));
		setResult(user?.result);
	}, []);
	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Link to={"/"} className={classes.brandContainer}>
				<img src={memoriesText} alt="logo" height={"45px"} />
				<img
					className={classes.image}
					src={memoriesLogo}
					alt="icon"
					height="40px"
				/>
			</Link>
			<Toolbar className={classes.toolbar}>
				{result ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.purple}
							alt={result.name}
							src={result.imageUrl}
						></Avatar>
						<Typography className={classes.userName} variant="h6">
							{result.name}
						</Typography>
						<Button
							className={classes.logout}
							onClick={logout}
							variant="contained"
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to="/auth"
						variant="contained"
						color="primary"
					>
						Sign in
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
