import { AUTH } from "../constants/actionTypes";

import * as API from "../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await API.signIn(formData);
		dispatch({ type: AUTH, data });
		navigate("/");
		window.location.reload();
	} catch (error) {
		console.log(error);
	}
};
export const signup = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await API.signUp(formData);
		dispatch({ type: AUTH, data });
		navigate("/");
	} catch (error) {
		console.log(error);
	}
};
// 2:02:06
