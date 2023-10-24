const fs = require('node:fs');
const csvParser = require('csv-parser');

// const fileWithData = './files/small_file_for_test.csv';
const fileWithData = './files/free_company_dataset.csv';
let counter = 0;


fs.createReadStream(fileWithData)
    .pipe(csvParser())
    .on('data', (row) => {
        counter++;
        console.log(counter, row.country);
    })
    .on('end', () => {
        console.log('Data  ffrom the file in JSON format.');
    })
    .on('error', (error) => {
        console.error('Error: ', error.message);
    });
