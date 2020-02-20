import React, { Component } from 'react';
import { connect } from 'react-redux';
import SensorList from './SensorList';

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
		//console.log(this.props);
		const { sensors } = this.props;

		return (
			<div className="sensor-container">
				<h1 className="center blue-text">Sensors</h1>
				<SensorList sensors={sensors} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sensors: state.project.sensors //project in rootreducer
	};
};
export default connect(mapStateToProps)(App);
