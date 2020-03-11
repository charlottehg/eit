import React from 'react';

const SensorSummary = ({ sensor }) => {
	let gjeldendeVerdi = 0;
	let valueArr = [];
	for (let i = 0; i < sensor.value.length; i++) {
		gjeldendeVerdi = sensor.value[i];
		//console.log('gverdi', gjeldendeVerdi);
		valueArr.push(gjeldendeVerdi); //hvis man skal se resultater over tid kan man bruke valueArr
	}
	return (
		<div className="col l3 card project-summary blue-grey darken-1">
			<div className="card-content white-text" id="cardcontent">
				<p className="card-title">{sensor.name}</p>
				<p> Value: {gjeldendeVerdi}</p>
			</div>
		</div>
	);
};

export default SensorSummary;
