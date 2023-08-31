const XLSX = require('xlsx');

const filePath = 'titulos.xlsx';

const workbook = XLSX.readFile(filePath);

const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });

console.log('Convert successfuly => ', jsonData);