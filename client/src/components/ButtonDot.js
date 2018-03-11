import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDot } from '../actions/calcActions';



class ButtonDot extends Component {
	handleClick = () => {
		this.props.dispatch(addDot());
	};

	render() {
		return <button onClick={this.handleClick}>.</button>;
	}
}

const mapStateToProps = ({ input }) => ({ input });
export default connect(mapStateToProps)(ButtonDot);
