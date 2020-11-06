import React, { useState } from "react";

import Main from "./Main";

import { useRoutes } from "react-router-dom";

function App() {
	const routes = [
		{
			path: "/",
			element: <Main />,
		},
	];

	return useRoutes(routes);
}

export default App;
