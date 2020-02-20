import React from 'react';

const SensorSummary = ({ sensors }) => {
	const sensorList = sensors.length ? (
		sensors.map((sensor) => {
			return (
				<div className="collection-item">
					<span>{sensor.name}</span>
				</div>
			);
		})
	) : (
		<p className="center">You have no todo's left, yay!</p>
	);

	return <div className="sensor collection">{sensorList}</div>;
};

export default SensorSummary;
