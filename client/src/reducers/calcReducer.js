import evaluate from '../utils/evaluate';

const reducerDefaultState = { input: 0, memory: 0, operation: '', displayMemory: false, parse: true };

export default (state = reducerDefaultState, action) => {
	const target = state.displayMemory ? state.memory : state.input;
	switch (action.type) {
		case 'ADD_DIGIT':
			return { ...state, input: '' + state.input + action.digit, displayMemory: false };
		case 'ADD_DOT':
			return { ...state, input: '' + state.input + '.', displayMemory: false, parse: false };
		case 'EXECUTE_OPERATION':
			return {
				input: 0,
				memory: evaluate(target, state.memory, state.operation) || state.input,
				operation: action.operation,
				displayMemory: true,
				parse: true,
			}; //display Memory == true? evalute against memory, not against display
		// case 'EVALUATE': // use external evaluate function
		// 	return {
		// 		input: evaluate(state.input, state.memory, state.operation) || state.input,
		// 		memory: 0,
		// 		operation: '',
		// 	};
		case 'CLEAR':
			return { ...state, input: 0, parse: true };
		case 'ALL_CLEAR':
			return reducerDefaultState;
		case 'PERCENTAGE':
			return { ...state, input: parseFloat(target / 100), displayMemory: false, parse: true };
		case 'SWITCH_SIGN':
			return { ...state, input: parseFloat(-target), displayMemory: false };
		default:
			return state;
	}
};
