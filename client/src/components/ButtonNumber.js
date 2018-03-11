import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDigit } from '../actions/calcActions';

class ButtonNumber extends Component {
	handleClick = () => {
    this.props.dispatch(addDigit(this.props.digit));
	};

	render() {
		return <button onClick={this.handleClick} >
				{this.props.digit}
			</button>;
	}
}

export default connect()(ButtonNumber);
