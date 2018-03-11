import React, { Component } from 'react';
import { connect } from 'react-redux';

import { allClear, clear } from '../actions/calcActions';

class ButtonClear extends Component {
	handleClick = () => {
		if (this.props.clearingAll) this.props.dispatch(allClear());
    else this.props.dispatch(clear());
	};

	render() {
		return <button onClick={this.handleClick}>{this.props.clearingAll ? 'AC' : 'C'}</button>;
	}
}

const mapStateToProps = ({ input }) => ({ input });
export default connect(mapStateToProps)(ButtonClear);
