import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialContentBoxes = [
	{
		title: "OSA.",
		link: "/osa",
		description: ""
		// 	"Our premier summer internship for underclassmen. mentorship, impactful projects, and more can be found in the open source accelerator: the first program of its kind in the united states.",
	},
	{
		title: "Launchpad.",
		link: "/launchpad",
		description: ""
		// 	"Our premier fall program for new web developers. launchpad is where impact begins and learning ends: the first program of its kind in the united states.",
	},
	{
		title: "Social Good.",
		link: "/socialgood",
		description: ""
		// 	"This is the heart of riceapps. if there is no impact, there is no project. we’re always looking for new opportunities to create good through our digital solutions, so please reach out if your organization needs dedicated problem-solvers to tackle an issue!",
	},
];

const DescriptionBox = ({ title, link, description }) => {
	return (
		<div className="descriptionBox">
			<Link to={link}><h1>{title}</h1></Link>
			<p>{description}</p>
		</div>
	);
};

function DescriptionBoxes() {
	const [getContentBoxes, setContentBoxes] = useState(initialContentBoxes);

	useEffect(() => {
		const getDescriptions = async () => {
			const descriptionRequest = await fetch(
				"https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1"
			);
			const descriptionText = await descriptionRequest.json();
			const newDescriptionBoxes = initialContentBoxes.map((box, idx) => ({ title: box.title, link: box.link, description: descriptionText[idx] }) );
			setContentBoxes(newDescriptionBoxes);
		};
		getDescriptions();
	}, []);

	return (
		<div className="descriptionBoxContainer">
			{getContentBoxes.map((contentBox) => (
				<DescriptionBox
					title={contentBox.title}
					description={contentBox.description}
					link={contentBox.link}
				/>
			))}
		</div>
	);
}

export default DescriptionBoxes;
