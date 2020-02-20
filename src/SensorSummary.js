import React from 'react';

const SensorSummary = ({ sensor }) => {
	return (
		<div className="card z-dept-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{sensor.name}</span>
			</div>
		</div>
	);
};

export default SensorSummary;
