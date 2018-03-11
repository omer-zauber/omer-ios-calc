import React from 'react';
import { connect } from 'react-redux';
import ScaleText from 'react-scale-text';

const Output = props => {
	let output;
	if (props.displayMemory) output = props.memory;
	else if (props.parse) output = parseFloat(props.input) || 0;
	else output = props.input || 0;

	return (
		<ScaleText>
			<span className="child">{output}</span>
		</ScaleText>
	);
};
const mapStateToProps = ({ input, memory, displayMemory, parse }) => ({ input, memory, displayMemory, parse });

export default connect(mapStateToProps)(Output);
