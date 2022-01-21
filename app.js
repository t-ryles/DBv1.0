const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//Css styling
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

//Getting the html file
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/pages/contact.html');
});

app.post('/', (req, res) => {
	console.log(req.body);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
