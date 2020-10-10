import React from "react";

function NavigationBar({ getDarkMode, setDarkMode }) {
	const logoURL =
		"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4f03431c-52ad-4548-97ec-38fee57a08db/riceappslogo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201010T194741Z&X-Amz-Expires=86400&X-Amz-Signature=6b49e84faa7caa8eace733f42ae4cc46cebb9b37873232896659a7d69bc003e9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22riceappslogo.png%22";

	const primaryColor = getDarkMode ? "black" : "white";
	const secondaryColor = getDarkMode ? "white" : "black";

	return (
		<div className="navigation" style={{ backgroundColor: primaryColor }}>
			<img className="logo" src={logoURL} />
			<div className="navigationLinks">
				<button
					onClick={() => setDarkMode(!getDarkMode)}
					className="darkModeToggle"
					style={{ backgroundColor: secondaryColor, color: primaryColor }}
				>
					{getDarkMode ? 'Disable' : 'Enable' } Dark Mode
				</button>
			</div>
		</div>
	);
}

export default NavigationBar;
