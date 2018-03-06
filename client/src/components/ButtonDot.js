import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDigit } from '../actions/calcActions';
import isInt from '../utils/isInt';

class ButtonDot extends Component {
	handleClick = () => {
		if (isInt(this.props.input)) this.props.dispatch(addDigit('.'));
	};

	render() {
		return <td onClick={this.handleClick}>.</td>;
	}
}

const mapStateToProps = ({ input }) => ({ input });
export default connect(mapStateToProps)(ButtonDot);
