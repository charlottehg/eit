import React from 'react';

const SensorSummary = ({ sensor }) => {
	return (
		<div className="col l3 card project-summary blue-grey darken-1">
			<div className="card-content white-text" id="cardcontent">
				<p className="card-title">{sensor.name}</p>
				<p> Value: {sensor.value}</p>
			</div>
		</div>
	);
};

export default SensorSummary;
