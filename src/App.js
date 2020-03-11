import React, { Component } from 'react';
import { connect } from 'react-redux';
import SensorList from './SensorList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class App extends Component {
	render() {
		const { sensors } = this.props;

		return (
			//div for hele siden <img id="plant" src={Logo} alt="plant" />
			<div className="container">
				<div className="row section-2-spacing-top">
					<h1 className="header-text">Plantview</h1>
					<p>Følgende verdier viser plantens pH-verdi, temperatur, CO2 og jord.</p>
					<SensorList className="" sensors={sensors} />
				</div>
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
