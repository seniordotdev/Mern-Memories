import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import Visiblity from "@mui/icons-material/Visibility";
import VisiblityOff from "@mui/icons-material/VisibilityOff";
const Input = ({
	name,
	half,
	handleChange,
	label,
	autoFocus,
	type,
	handleShowPassword,
}) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				name={name}
				onChange={handleChange}
				variant="outlined"
				required
				fullWidth
				label={label}
				autoFocus={autoFocus}
				type={type}
				InputProps={
					name === "password" ? {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={handleShowPassword}>
									{type === "password" ? <Visiblity /> : <VisiblityOff />}
								</IconButton>
							</InputAdornment>
						),
					} : null
				}
			/>
		</Grid>
	);
};

export default Input;
