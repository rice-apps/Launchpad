import React, { useContext } from "react";
import { DarkModeContext } from "../Context";

function NavigationBar() {
	const { getDarkMode, setDarkMode } = useContext(DarkModeContext);

	const logoURL =
		"http://riceapps.org/static/media/logo_color_light.7d03c94d.png";

	const primaryColor = getDarkMode ? "black" : "white";
	const secondaryColor = getDarkMode ? "white" : "black";

	return (
		<div className="navigation" style={{ backgroundColor: primaryColor }}>
			<img className="logo" src={logoURL} />
			<div className="navigationLinks">
				<button
					onClick={() => setDarkMode(!getDarkMode)}
					className="darkModeToggle"
					style={{
						backgroundColor: secondaryColor,
						color: primaryColor,
					}}
				>
					{getDarkMode ? "Disable" : "Enable"} Dark Mode
				</button>
			</div>
		</div>
	);
}

export default NavigationBar;
