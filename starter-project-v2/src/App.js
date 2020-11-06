import React, { useState } from "react";

// Component Imports
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import RiceAppsHeading from "./components/RiceAppsHeading";
import DescriptionBoxes from "./components/DescriptionBoxes";

// CSS Imports
import "./App.css";

// Context Imports
import { DarkModeContext } from "./Context";

function App() {
	// Dark Mode initialized to off
	const [getDarkMode, setDarkMode] = useState(false);

	return (
		<DarkModeContext.Provider value={{ getDarkMode, setDarkMode }}>
			<div>
				<NavigationBar />
				<Hero />
				<div
					style={{
						backgroundColor: getDarkMode ? "#86dad3" : "#faa1bc",
					}}
				>
					<RiceAppsHeading />
					<DescriptionBoxes />
				</div>
			</div>
		</DarkModeContext.Provider>
	);
}

export default App;
