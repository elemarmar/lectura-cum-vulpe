// to create a server
const express = require('express');
const app = express();
// to handle files
const multer = require('multer');
// to enable cross-origin request to this server
const cors = require('cors');
// para leer archivos
const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '/public/uploadedText');

app.use(cors());

// Create a multer instance and set the destination folder.
// The code below uses /public folder. You can also assign a new
// file name upon upload.
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, 'uploadedText');
  },
});

// Create an upload instance and receive a single file
var upload = multer({ storage: storage }).single('file');

// Setup thePOSTroute to upload a file
// Start an upload object and handle an error, check
// formulter error before general errors. Status OK (200)
// with metadata is sent back to the client on successful upload.
app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  });

  readFile();
});

/*app.get('/get-file', function (req, res) {
  res.status(200).send(newTextData)
})

fetch('./data.json')*/

// Make the server listen on port 8000.
app.listen(8000, function () {
  console.log('App running on port 8000');
});

let newTextData = [];
// Read uploaded document
const readFile = () => {
  fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    console.log(data);
    newTextData = parseSrt(data);
    console.log('Data: ' + newTextData);
    writeFile();
  });
};

function parseSrt(text) {
  return text.split(' ');
}

const writeFile = () => {
  // create file
  fs.writeFile('public/data.json', JSON.stringify(newTextData), function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
};
