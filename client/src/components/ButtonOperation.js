import React, { Component } from 'react';
import { connect } from 'react-redux';

import { executeOperation } from '../actions/calcActions';

class ButtonOperation extends Component {
	handleClick = () => {
		this.props.dispatch(executeOperation(this.props.operation));
	};

	render() {
		return <button onClick={this.handleClick}>{this.props.symbol}</button>;
	}
}

export default connect()(ButtonOperation);
