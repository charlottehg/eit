import React, { Component } from 'react';
import { connect } from 'react-redux';
import SensorList from './SensorList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class App extends Component {
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
	console.log(state);
	return {
		sensors: state.firestore.ordered.sensors //project in rootreducer. Dummy data
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		//when this component is active, the component to listen to is the sensors
		{ collection: 'sensors' } //synced up with the sensors collection in firebase
	])
)(App);
