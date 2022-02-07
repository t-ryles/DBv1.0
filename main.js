//! Sets up server for whole project

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const contactRouter = require('./routes/mailingList.js');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

//Getting the html file
app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/pages/home.html`);
});

/*app.get('/contact', (req, res) => {
	res.sendFile(`${__dirname}/pages/contact.html`);
});*/

//Router for contact page
app.use('pages/contact.html', contactRouter);

app.listen(PORT, (err) => {
	//Added error handling
	if (err) {
		console.log('Error!', err);
	}
	console.log(`Server running on port ${PORT}`);
});
