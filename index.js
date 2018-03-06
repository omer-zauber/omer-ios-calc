const express = require('express');
const app = express();
const path = require('path');

let indexPath = path.resolve(__dirname, 'client', 'index.html');
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	indexPath = path.resolve(__dirname, 'client', 'build', 'index.html');
}

app.get('*', (req, res) => {
	res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
