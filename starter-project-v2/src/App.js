import React, { useState } from "react";

import Main from "./Main";
import OSA from "./pages/OSA";
import Launchpad from "./pages/Launchpad";
import SocialGood from "./pages/SocialGood";

import { useRoutes } from "react-router-dom";

function App() {
	const routes = [
		{
			path: "/",
			element: <Main />,
		},
		{
			path: "/osa",
			element: <OSA />,
		},
		{
			path: "/launchpad",
			element: <Launchpad />,
		},
		{
			path: "/socialgood",
			element: <SocialGood />,
		},
	];

	return useRoutes(routes);
}

export default App;
