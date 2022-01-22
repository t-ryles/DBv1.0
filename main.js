/*const express = require('express');
const { google } = require('googleapis');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//Css styling
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

//Getting the html file
app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/pages/home.html`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
	//Added error handling
	if (err) {
		console.log('Error!', err);
	}
	console.log(`Server running on port ${PORT}`);
});*/
