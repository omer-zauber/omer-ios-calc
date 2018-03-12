import React, { Component } from 'react';
import { connect } from 'react-redux';
//import ScaleText from 'react-scale-text';

class Output extends Component {
	render() {
		let output;
		if (this.props.displayMemory) output = this.props.memory;
		else output = this.props.input;
		const formattedOutput = parseFloat(output) === 0 ? output : parseFloat(output, 10).toLocaleString(
						undefined,
						{
							maximumFractionDigits: 20,
						}
				  );
		const outputLength = formattedOutput.length;

		return (
			<div
				className="display__text"
				style={{ fontSize: `${outputLength < 6 ? 100 : 27500 / (275 + (outputLength - 6) * 40)}%` }}
			>
				{formattedOutput}
			</div>
		);

		// return (
		// 	<div
		// 		className="display__text"
	
		// 	>
		// 		{formattedOutput}
		// 	</div>
		// );
	}
}
const mapStateToProps = ({ input, memory, displayMemory, parse }) => ({ input, memory, displayMemory, parse });

export default connect(mapStateToProps)(Output);
