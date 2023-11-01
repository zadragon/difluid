import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = () => {
	return (
		<div>
			<div className="userImg"></div>
			<div className="userTitle"></div>
			<div className="userDesc"></div>
			<Link to="/">Learn more</Link>
		</div>
	);
};

export default ProfileCard;
