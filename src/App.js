import React, { Component } from 'react';
import SensorSummary from './SensorSummary';

class App extends Component {
	state = {
		sensors: [
			{ id: '1', name: 'pH-verdi', value: [] },
			{ id: '2', name: 'Jordfuktighet', value: [] },
			{ id: '3', name: 'Luftfuktighet', value: [] },
			{ id: '4', name: 'CO2', value: [] }
		]
	};
	render() {
		return (
			<div className="sensor-container">
				<h1 className="center blue-text">Sensors</h1>
				<SensorSummary sensors={this.state.sensors} />
			</div>
		);
	}
}

export default App;
