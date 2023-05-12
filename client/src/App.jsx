import { Container } from "@mui/material";

import memoriesLogo from "./images/memoriesLogo.png";
import memoriesText from "./images/memoriesText.png";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import { Route, Routes } from "react-router-dom";
import NavigateTo from "./components/Navigate/Navigate";
import PostDetailes from "./components/PostDetalies/PostDetailes";
import NavigateAuth from "./components/NavigateAuth/NavigateAuth";

function App() {
	const user = JSON.parse(localStorage.getItem("profile"));
	return (
		<Container maxWidth="lg">
			<Navbar memoriesLogo={memoriesLogo} memoriesText={memoriesText} />
			<Routes>
				<Route path={"/"} element={<NavigateTo path={"/posts"} />} />
				<Route path={"/posts"} element={<Home />} />
				<Route path={"/posts/search"} element={<Home />} />
				<Route path={"/posts/:id"} element={<PostDetailes />} />
				<Route path={"/auth"} element={<NavigateAuth user={user} />} />
			</Routes>
		</Container>
	);
}

export default App;
//02:24:06
