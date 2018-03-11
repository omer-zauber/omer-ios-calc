import evaluate from '../utils/evaluate';

const reducerDefaultState = { input: '0', memory: 0, operation: '', displayMemory: false };

export default (state = reducerDefaultState, action) => {
	const target = state.displayMemory ? state.memory : state.input;
	switch (action.type) {
		case 'ADD_DIGIT':
			if (state.input === '0') return { ...state, input: '' + action.digit, displayMemory: false };
			else return { ...state, input: '' + state.input + action.digit, displayMemory: false };
		case 'ADD_DOT':
			if (state.input.indexOf('.') === -1)
				return { ...state, input: '' + state.input + '.', displayMemory: false };
			else return { ...state };
		case 'EXECUTE_OPERATION':
			return {
				input: '0',
				memory: evaluate(target, state.memory, state.operation) || state.input,
				operation: action.operation,
				displayMemory: true,
			};
		case 'CLEAR':
			return { ...state, input: '0' };
		case 'ALL_CLEAR':
			return reducerDefaultState;
		case 'PERCENTAGE':
			return { ...state, input: parseFloat(target / 100)+'', displayMemory: false };
		case 'SWITCH_SIGN':
			return { ...state, input: parseFloat(-target)+'', displayMemory: false };
		default:
			return state;
	}
};
