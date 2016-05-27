let fs = require('fs'),
PDFParser = require("./pdf2json/PDFParser");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("./pdf2json/test/pdf/fd/form/F1040EZ.pdf");