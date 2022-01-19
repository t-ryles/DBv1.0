const express = require('express');
const { google } = require('googleapis');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('contact');
});

app.post('/', async (req, res) => {
	const { MLfirstName, MLlastName, Email } = req.body;

	const auth = new google.auth.GoogleAuth({
		keyFile: 'credentials.json',

		scopes: 'https://www.googleapis.com/auth/spreadsheets'
	});

	//Create client instance for auth
	const client = await auth.getClient();

	//Instance of Google sheets API
	const googleSheets = google.sheets({ version: 'v4', auth: client });

	const spreadsheetId = '1UDsdEd6HOrP_wkherSCOqxsFQ2cH84zr9aaNXsU0PME';

	/*Get meta data about spreadsheet
	const metaData = await googleSheets.spreadsheets.get({
		auth,
		spreadsheetId
	});*/

	/*Read rows from spreadsheets
	const getRows = await googleSheets.spreadsheets.values.get({
		auth,
		spreadsheetId,
		range: 'Sheet1!A:A'
	});*/

	//Write row(s) to spreadsheet
	await googleSheets.spreadsheets.values.append({
		auth,
		spreadsheetId,
		range: 'Sheet1!A:B',
		valueInputOption: 'USER_ENTERED',
		//Actual information to send
		resource: {
			values: [ [ MLfirstName, MLlastName, Email ] ]
		}
	});

	//res.send(metaData.data);
	//res.send(getRows.data);
	res.send('Successful submitted');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
