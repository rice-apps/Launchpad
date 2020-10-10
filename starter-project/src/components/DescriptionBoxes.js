import React from "react";

const DescriptionBox = ({ title, description }) => {
	return (
		<div className="descriptionBox">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

function DescriptionBoxes() {
	const contentBoxes = [
		{ title: "OSA.", description: "Our premier summer internship for underclassmen. mentorship, impactful projects, and more can be found in the open source accelerator: the first program of its kind in the united states." },
		{ title: "Launchpad.", description: "Our premier fall program for new web developers. launchpad is where impact begins and learning ends: the first program of its kind in the united states." },
		{ title: "Social Good.", description: "This is the heart of riceapps. if there is no impact, there is no project. we’re always looking for new opportunities to create good through our digital solutions, so please reach out if your organization needs dedicated problem-solvers to tackle an issue!" },
	];

	return (
		<div className="descriptionBoxContainer">
			{contentBoxes.map((contentBox) => (
				<DescriptionBox
					title={contentBox.title}
					description={contentBox.description}
				/>
			))}
		</div>
	);
}

export default DescriptionBoxes;
