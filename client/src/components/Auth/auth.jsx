import {
	Avatar,
	Button,
	Paper,
	Typography,
	Grid,
	Container,
} from "@mui/material";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./styles";
import { Fragment, useEffect, useState } from "react";
import Input from "./input";
import GoogleIcon from "./icon";
import { useDispatch } from "react-redux";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
import { signup, signin } from "../../actions/auth";
const Auth = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setIsSignup] = useState(false);
	const [formData, setFormData] = useState(initialState);
	const dispatch = useDispatch();
	const classes = useStyles();
	const navigate = useNavigate();
	const handleSumbit = (e) => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(formData, navigate));
		} else {
			dispatch(signin(formData, navigate));
		}
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};
	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};
	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res.tokenId;
		try {
			dispatch({ type: "AUTH", data: { result, token } });
			navigate("/");
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};
	const googleFailure = (error) => {
		console.log(error);
		console.log("Google Sign In was unsuccesful. Try again later");
	};
	const clientId =
		"884547979209-u8iao9mc5db1esr2ari7n50n57qtnucd.apps.googleusercontent.com";
	useEffect(() => {
		gapi.load("client:auth2", () => {
			gapi.auth2.init({ clientId: clientId });
		});
	}, []);
	return (
		<Container component={"main"} maxWidth="xs">
			<Paper className={classes.paper} elevation={"3"}>
				<Avatar
					className={classes.avatar}
					style={{ backgroundColor: "#f50057" }}
				>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignup ? "Sign up" : "Sign In"}</Typography>
				<form action="" className={classes.form} onSubmit={handleSumbit}>
					<Grid container spacing={2}>
						{isSignup && (
							<Fragment>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</Fragment>
						)}
						<Input
							name="email"
							label="Email adress "
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name={"confirmPassword"}
								label={"Repeat Password"}
								handleChange={handleChange}
								type={"password"}
							/>
						)}
						<Button
							type="sumbit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							{isSignup ? "Sign up" : "Sign In"}
						</Button>
						<GoogleLogin
							clientId="884547979209-u8iao9mc5db1esr2ari7n50n57qtnucd.apps.googleusercontent.com"
							render={(renderedProps) => (
								<Button
									className={classes.googleButton}
									color="primary"
									fullWidth
									onClick={renderedProps.onClick}
									disabled={renderedProps.disabled}
									startIcon={<GoogleIcon />}
									variant="contained"
								>
									Google Sign in
								</Button>
							)}
							onSuccess={googleSuccess}
							onFailure={googleFailure}
							cookiePolicy={"single_host_origin"}
						/>
						<Grid container justifyContent={"flex-end"}>
							<Grid item>
								<Button onClick={switchMode}>
									{isSignup
										? "Already have an account ? Sign in"
										: "Don't have an account ? Sign up"}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
