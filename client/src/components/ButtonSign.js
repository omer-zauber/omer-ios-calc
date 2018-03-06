import React, { Component } from 'react';
import { connect } from 'react-redux';

import { switchSign } from '../actions/calcActions';

class ButtonPercent extends Component {
	handleClick = () => {
	 this.props.dispatch(switchSign());
	};

	render() {
		return <td onClick={this.handleClick}>±</td>;
	}
}

const mapStateToProps = ({ input }) => ({ input });
export default connect(mapStateToProps)(ButtonPercent);
