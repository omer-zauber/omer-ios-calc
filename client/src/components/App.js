import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonNumber from './ButtonNumber';
import ButtonDot from './ButtonDot';
import ButtonClear from './ButtonClear';
import ButtonOperation from './ButtonOperation';
import ButtonPercent from './ButtonPercent';
import ButtonSign from './ButtonSign';

class App extends Component {
	render() {
		return <div>
				<table border={1}>
					<thead>
						<tr>
							<td colSpan={4}>
								{this.props.displayMemory
									? this.props.memory
									: (this.props.input || 0)}
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<ButtonClear clearingAll={parseFloat(this.props.input, 10) === 0} />
							<ButtonSign />
							<ButtonPercent />
							<ButtonOperation operation={'/'} symbol={'÷'} />
						</tr>
						<tr>
							<ButtonNumber digit={7} />
							<ButtonNumber digit={8} />
							<ButtonNumber digit={9} />
							<ButtonOperation operation={'x'} symbol={'X'} />
						</tr>
						<tr>
							<ButtonNumber digit={4} />
							<ButtonNumber digit={5} />
							<ButtonNumber digit={6} />
							<ButtonOperation operation={'-'} symbol={'-'} />
						</tr>
						<tr>
							<ButtonNumber digit={1} />
							<ButtonNumber digit={2} />
							<ButtonNumber digit={3} />
							<ButtonOperation operation={'+'} symbol={'+'} />
						</tr>
						<tr>
							<ButtonNumber digit={0} tdColSpan={2} />
							<ButtonDot />
							<ButtonOperation operation={'='} symbol={'='} />
						</tr>
					</tbody>
				</table>
			</div>;
	}
}

const mapStateToProps = ({ input, memory, displayMemory}) => ({ input, memory, displayMemory });

export default connect(mapStateToProps)(App);
