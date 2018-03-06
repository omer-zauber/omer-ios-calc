export default (input, memory, operation) => {
	switch (operation) {
		case 'x':
			return parseFloat(memory) * parseFloat(input);
		case '/':
			return parseFloat(memory) / parseFloat(input);
		case '+':
			return parseFloat(memory) + parseFloat(input);
		case '-':
			return parseFloat(memory) - parseFloat(input);
		case '=':
		return parseFloat(memory);
			default:
			return;
	}
};
