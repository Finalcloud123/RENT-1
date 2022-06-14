import React from 'react';
import Navbar from './components/Navbar.jsx';
import RentCard from './components/RentCard.jsx';
import Graph from './components/Graph.jsx';
import rentdata from './rentData.js';
import { Card, Row, Col } from 'react-bootstrap';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

import './App.css';

function App() {

	return (
		<div className="App">
			<Navbar />
			<Graph/>
			<Row xs={1} md={3} className="g-4">
				{rentdata.map(rent => (
					<Col>			
						< RentCard rent={rent} />
					</Col>
				))}
			</Row>
		</div>
	);
}



export default App;
