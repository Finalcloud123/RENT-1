import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import rentdata2 from './rentData2.js'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import './css/Graph.css';


function Graph() {
const data = [
		{ quarter: 1, earnings: 3210 },
		{ quarter: 2, earnings: 3233 },
		{ quarter: 3, earnings: 3425 },
		{ quarter: 4, earnings: 3640 },
		{ quarter: 5, earnings: 3739 },
		{ quarter: 6, earnings: 3857 },
		{ quarter: 7, earnings: 3869 },
		{ quarter: 8, earnings: 3758 },
		{ quarter: 9, earnings: 3865 },
		{ quarter: 10, earnings: 3995 },
		{ quarter: 11, earnings: 3676 },
		{ quarter: 12, earnings: 3821 },
		{ quarter: 13, earnings: 4402 }



	];


	return (
		<main>
			<VictoryChart
				domainPadding={20}>
				<VictoryAxis
					// tickValues specifies both the number of ticks and where
					// they are placed on the axis
					tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
					tickFormat={["'10", "'11", "'12", "'13", "'14","'15","'16","'17","'18", "'19", "'20", "'21", "'22"]}
				/>
				<VictoryAxis
					
					dependentAxis
					
					// tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
				/>
				
			<VictoryBar
					data={data}
					x="quarter"
					y="earnings"
				/>

			</VictoryChart>
		</main>
	);
}

export default Graph;