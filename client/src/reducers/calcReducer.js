import evaluate from '../utils/evaluate';

const reducerDefaultState = { input: '', memory: 0, operation: '', displayMemory: false};

export default (state = reducerDefaultState, action) => {
	const target = state.displayMemory ? state.memory : state.input;
	switch (action.type) {
		case 'ADD_DIGIT':
			return { ...state, input: '' + state.input + action.digit, displayMemory: false };
		case 'ADD_DOT':
			return { ...state, input: '' + (state.input||0) + '.', displayMemory: false };
		case 'EXECUTE_OPERATION':
			return {
				input: '',
				memory: evaluate(target, state.memory, state.operation) || state.input,
				operation: action.operation,
				displayMemory: true,
			}; //display Memory == true? evalute against memory, not against display
		// case 'EVALUATE': // use external evaluate function
		// 	return {
		// 		input: evaluate(state.input, state.memory, state.operation) || state.input,
		// 		memory: 0,
		// 		operation: '',
		// 	};
		case 'CLEAR':
			return { ...state, input: 0 };
		case 'ALL_CLEAR':
			return reducerDefaultState;
		case 'PERCENTAGE':
			return { ...state, input: parseFloat(target / 100), displayMemory: false };
		case 'SWITCH_SIGN':
			return { ...state, input: parseFloat(-target), displayMemory: false };
		default:
			return state;
	}
};
