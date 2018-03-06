import React from 'react';
import { connect } from 'react-redux';

const Output = props => {
	let output;
	if (props.displayMemory) output = props.memory;
	else if (props.parse) output = parseFloat(props.input) || 0;
	else output = props.input || 0;

	return <td colSpan={4}>{output}</td>;
};
const mapStateToProps = ({ input, memory, displayMemory, parse }) => ({ input, memory, displayMemory, parse });

export default connect(mapStateToProps)(Output);
