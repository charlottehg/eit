import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class PlantChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: [ 'Klokkeslett1', '2', '3', '4' ],
				datasets: [
					{
						label: 'Planteverdier over tid',
						data: [ 10, 3, 89, 40, 55, 20 ],
						backgroundColor: [ 'rgba(255,206,86,0.6' ]
					}
				]
			}
		};
	}
	render() {
		return (
			<div className="chart">
				<Line data={this.state.chartData} options={{ maintainAspectRatio: false }} />
			</div>
		);
	}
}

export default PlantChart;
