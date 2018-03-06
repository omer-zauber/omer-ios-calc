import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDigit } from '../actions/calcActions';

class ButtonNumber extends Component {
	handleClick = () => {
    this.props.dispatch(addDigit(this.props.digit));
	};

	render() {
		return (
			<td onClick={this.handleClick} colSpan={this.props.tdColSpan || 1}>
				{this.props.digit}
			</td>
		);
	}
}

export default connect()(ButtonNumber);
