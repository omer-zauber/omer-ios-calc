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
		return <div className="container">
				<table border={1} className="table">
					<thead>
						<tr>
							<td className="td__dark-grey display parent" colSpan={4}>
								<Output />
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="td td__grey">
								<ButtonClear clearingAll={this.props.input === '0'} />
							</td>
							<td className="td td__grey">
								<ButtonSign />
							</td>
							<td className="td td__grey">
								<ButtonPercent />
							</td>
							<td className="td td__orange">
								<ButtonOperation operation={'/'} symbol={'÷'} />
							</td>
						</tr>
						<tr>
							<td className="td td__light-grey">
								<ButtonNumber digit={7} />
							</td>
							<td className="td td__light-grey">
								<ButtonNumber digit={8} />
							</td>
							<td className="td td__light-grey">
								<ButtonNumber digit={9} />
							</td>
							<td className="td td__orange">
								<ButtonOperation operation={'x'} symbol={'X'} />
							</td>
						</tr>
						<tr>
							<td className="td td__light-grey">
								<ButtonNumber digit={4} />
							</td>
							<td className="td td__light-grey">
								<ButtonNumber digit={5} />
							</td>
							<td className="td td__light-grey">
								<ButtonNumber digit={6} />
							</td>
							<td className="td td__orange">
								<ButtonOperation operation={'-'} symbol={'-'} />
							</td>
						</tr>
						<tr>
							<td className="td td__light-grey">
								<ButtonNumber digit={1} />
							</td>
							<td className="td td__light-grey">
								<ButtonNumber digit={2} />
							</td>
							<td className="td td__light-grey">
								<ButtonNumber digit={3} />
							</td>
							<td className="td td__orange">
								<ButtonOperation operation={'+'} symbol={'+'} />
							</td>
						</tr>
						<tr>
							<td colSpan={2} className="td td__light-grey td__zero">
								<ButtonNumber digit={0} />
							</td>
							<td className="td td__light-grey">
								<ButtonDot />
							</td>
							<td className="td td__orange">
								<ButtonOperation operation={'='} symbol={'='} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>;
	}
}

const mapStateToProps = ({ input, memory }) => ({ input, memory });

export default connect(mapStateToProps)(App);
