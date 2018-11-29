const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const fs = require("fs");
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.use(fileUpload());

app.post("/upload", (req, res) => {
	const file = req.files.file;
	fs.writeFileSync(`./resources/${file.name}`, file.data);
	res.send('File uploaded!');
});

app.get("/download", (req, res) => res.download("/resources/file"));

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));