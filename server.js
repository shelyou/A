const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

// Middleware untuk parse JSON body
app.use(express.json());
app.use(express.static('public'));

// Endpoint untuk mengambil data (GET)
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint untuk menyimpan data (POST)
app.post('/data', (req, res) => {
    const newData = req.body;

    // Menyimpan data baru ke file data.json
    fs.writeFile('data.json', JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Error writing data file');
        }
        res.status(200).send('Data updated successfully');
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
