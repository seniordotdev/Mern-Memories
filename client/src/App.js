import { Container } from "@mui/material";

import memories from "./images/memories.png";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/auth";

function App() {
	return (
		<Container maxWidth="lg">
			<Navbar memories={memories} />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/auth"} element={<Auth />} />
			</Routes>
		</Container>
	);
}

export default App;
//02:24:06
