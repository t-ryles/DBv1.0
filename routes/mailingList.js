//! Post  email info to Google Sheets

const { google } = require('googleapis');
const express = require('express');
const router = express.Router();

const app = express();

app.use(express.urlencoded({ extended: true }));

router.post(`${__dirname}/pages/contact.html`, async (req, res) => {
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

	res.send('Successful submitted');
});

module.exports = router;
