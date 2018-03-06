// ADD_DIGIT //for 0-9 and .
export const addDigit = digit => ({
	//action generator
	type: 'ADD_DIGIT',
	digit,
});

// EXECUTE_OPERATION //ONE FOR EACH? (NO - need to do 3 things - set the operation state, calculate previous memory with current screen, memory, and operation, set screen to 0)
export const executeOperation = operation => ({
	//action generator
	type: 'EXECUTE_OPERATION',
	operation,
});

// // EVALUATE
// export const evaluate = digit => ({
// 	//action generator
// 	type: 'EVALUATE',
// });

// ALL_CLEAR
export const allClear = () => ({
	//action generator
	type: 'ALL_CLEAR',
});

// CLEAR
export const clear = () => ({
	//action generator
	type: 'CLEAR',
});

export const percentage = () => ({
	type: 'PERCENTAGE',
});

export const switchSign = () => ({
	type: 'SWITCH_SIGN',
});
