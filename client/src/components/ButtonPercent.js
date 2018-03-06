import React, { Component } from 'react';
import { connect } from 'react-redux';

import { percentage } from '../actions/calcActions';

class ButtonPercent extends Component {
	handleClick = () => {
		this.props.dispatch(percentage());
	};

	render() {
		return <td onClick={this.handleClick}>%</td>;
	}
}

const mapStateToProps = ({ input }) => ({ input });
export default connect(mapStateToProps)(ButtonPercent);
