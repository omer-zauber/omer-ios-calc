import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonNumber from './ButtonNumber';
import ButtonDot from './ButtonDot';
import ButtonClear from './ButtonClear';
import ButtonOperation from './ButtonOperation';
import ButtonPercent from './ButtonPercent';
import ButtonSign from './ButtonSign';
import Output from './Output';

class App extends Component {
	render() {
		return <div>
				<p>
					input: {this.props.input} typeOf: {typeof this.props.input} <br />
					memory: {this.props.memory} typeOf: {typeof this.props.memory} 
				</p>
				<table border={1} className="table">
					<thead>
						<tr>
							<Output className="td__dark-grey" />
						</tr>
					</thead>
					<tbody>
						<tr>
							<ButtonClear clearingAll={this.props.input === '0'} className="td__grey" />
							<ButtonSign className="td__grey" />
							<ButtonPercent className="td__grey" />
							<ButtonOperation operation={'/'} symbol={'÷'} className="td__orange" />
						</tr>
						<tr>
							<ButtonNumber digit={7} className="td__light-grey" />
							<ButtonNumber digit={8} className="td__light-grey" />
							<ButtonNumber digit={9} className="td__light-grey" />
							<ButtonOperation operation={'x'} symbol={'X'} className="td__orange" />
						</tr>
						<tr>
							<ButtonNumber digit={4} className="td__light-grey" />
							<ButtonNumber digit={5} className="td__light-grey" />
							<ButtonNumber digit={6} className="td__light-grey" />
							<ButtonOperation operation={'-'} symbol={'-'} className="td__orange" />
						</tr>
						<tr>
							<ButtonNumber digit={1} className="td__light-grey" />
							<ButtonNumber digit={2} className="td__light-grey" />
							<ButtonNumber digit={3} className="td__light-grey" />
							<ButtonOperation operation={'+'} symbol={'+'} className="td__orange" />
						</tr>
						<tr>
							<ButtonNumber digit={0} tdColSpan={2} className="td__light-grey" />
							<ButtonDot className="td__light-grey" />
							<ButtonOperation operation={'='} symbol={'='} className="td__orange" />
						</tr>
					</tbody>
				</table>
			</div>;
	}
}

const mapStateToProps = ({ input, memory }) => ({ input, memory });

export default connect(mapStateToProps)(App);
