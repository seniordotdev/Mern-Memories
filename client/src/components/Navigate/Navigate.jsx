import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavigateTo({path}) {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(path);
	}, []);
	return <Fragment></Fragment>;
}
