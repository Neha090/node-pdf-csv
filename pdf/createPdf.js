var pdf = require("pdf-creator-node");
var fs = require('fs');
var download = require('download-pdf')
var helper = require('./helper')
var pdfMake = require('pdfmake/build/pdfmake.js');
const downloadFile = require("download-file");

exports.generatePdf = async function (employeeData) {
    
    var html = fs.readFileSync('D:\\nodepdf\\pdf\\employee.html', 'utf8');

    var options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm",
    };
    
    var employee =helper.convertToJSON(employeeData)
    
    var document = {
        html: html,
        data: {
            employee: employee
        },
        path: "./output.pdf"
    };

    let path = await pdf.create(document, options)
    return path.filename;
//      .then(res => {
//         console.log(res)
//         return res.filename;
//     })
//     .catch(error => {
//         console.error(error)
//     });

 }