const express = require('express');
const { google } = require('googleapis');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Word');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
