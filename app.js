const express = require('express');
const { google } = require('googleapis');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//Css styling
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

//Getting the html file
app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/pages/contact.html`);
});

app.post('/', async (req, res) => {
	const { MLfirstName, MLlastName, mailingListEmail } = req.body;

	const auth = new google.auth.GoogleAuth({
		keyFile: 'credentials.json',

		scopes: 'https://www.googleapis.com/auth/spreadsheets'
	});

	//Create client instance for auth
	const client = await auth.getClient();

	//Instance of Google sheets API
	const googleSheets = google.sheets({ version: 'v4', auth: client });

	const spreadsheetId = '1UDsdEd6HOrP_wkherSCOqxsFQ2cH84zr9aaNXsU0PME';

	await googleSheets.spreadsheets.values.append({
		auth,
		spreadsheetId,
		range: 'Sheet1!A:C',
		valueInputOption: 'USER_ENTERED',
		//Actual information to send
		resource: {
			values: [ [ MLfirstName, MLlastName, mailingListEmail ] ]
		}
	});

	//res.send(metaData.data);
	//res.send(getRows.data);
	res.send('Successful submitted');
});

app.listen(PORT, (err) => {
	//Added error handling
	if (err) {
		console.log('Error!', err);
	}
	console.log(`Server running on port ${PORT}`);
});
