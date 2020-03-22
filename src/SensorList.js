import React from 'react';
import { Chart } from 'chart.js';
import SensorSummary from './SensorSummary';

const SensorList = ({ sensors }) => {
	return (
		<div className="project-list section">
			{sensors &&
				sensors.map((sensor) => {
					return <SensorSummary sensor={sensor} key={sensor.id} />;
				})}
		</div>
	);
};

export default SensorList;
